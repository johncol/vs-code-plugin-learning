// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { BookTreeDataProvider } from './BookTreeDataProvider';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vs-code-plugin-learning" is now active!');
	
	let disposable;
	
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	// showMessage() will be executed every time the extension is activated
	disposable = vscode.commands.registerCommand('vs-code-plugin-learning.HelloWorld', () => {
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello!!!');
	});
	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand('vs-code-plugin-learning.CaptureName', () => {
		vscode.window.showInputBox({
			placeHolder: 'Enter your name',
			prompt: 'Enter your name',
			value: 'John Doe'
		}).then((name) => {
			if (name) {
				vscode.window.setStatusBarMessage(`We've got your name ${name}`);
			}
		});
	});
	context.subscriptions.push(disposable);

	vscode.window.registerTreeDataProvider('vs-code-plugin-learning.BooksExplorer', new BookTreeDataProvider());

	// disposable = vscode.commands.registerCommand('vs-code-plugin-learning.HelloWorld', () => {
	// 	// Display a message box to the user
	// });
	// context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {
	console.log('Your extension "vs-code-plugin-learning" was deactivated.');
}
