import fs from 'fs';
import inquirer from 'inquirer';

import {
	__dirname,
	error,
	info,
	success,
	getCurrentVersion,
	gitFactory,
	promptContinue,
	switchToBranchWithMessage,
	updateChangelog,
} from '../utils.js';

async function updateReadMe( currentBranchName ) {
	// Ensure we're always running in the project root.
	process.chdir( `${ __dirname }/..` );

	if ( ! fs.existsSync( 'readme.txt' ) ) {
		error(
			'The file readme.txt does not exist. Verify you are in the wc-calypso-bridge project directory.'
		);
		await switchToBranchWithMessage( currentBranchName );

		return false;
	}

	const git = gitFactory();

	// Retrieve the most recent 15 git log messages.
	const logs = await git.log( { n: 15 } );
	const choices = logs.all.map( ( c ) => ( {
		name: `(${ c.hash.substring( 0, 7 ) }) ${ c.message }`,
		value: { hash: c.hash, message: c.message },
	} ) );

	info( 'Please select the commits you would like to add to the readme.' );

	// Let the user select which commits to add to the readme.
	const answer = await inquirer.prompt( [
		{
			type: 'checkbox',
			name: 'commits',
			message: 'Choose commits to add to the readme:',
			default: null,
			choices,
		},
	] );

	if ( answer.commits.length === 0 ) {
		error( 'No commits selected. Aborting readme update.' );
		await switchToBranchWithMessage( currentBranchName );

		return false;
	}

	const version = getCurrentVersion();
	let changelogEntry = `= ${ version } =\n`;

	// Build the new changelog entry from the git log messages.
	answer.commits.map( ( c ) => ( changelogEntry += `* ${ c.message }\n` ) );

	info(
		`We'll update readme.txt with the following changelog entry:\n${ changelogEntry }`
	);

	const shouldContinue = await promptContinue(
		'Would you like to update readme.txt with the above changelog entry?'
	);
	if ( ! shouldContinue ) {
		info( 'Aborting readme update.' );
		await switchToBranchWithMessage( currentBranchName );

		return false;
	}

	// Update the changelog and commit the change.
	await updateChangelog( changelogEntry );

	await git.add( [ './readme.txt' ] );
	await git.commit( `Added version ${ version } to the changelog` );

	success( 'Readme updated successfully.' );
	return true;
}

updateReadMe( '1098-update/readme-section' );