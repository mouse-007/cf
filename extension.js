// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require("fs")

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', function (e) {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		// vscode.window.showErrorMessage('皇帝哈德哈韩的');
		// 创建文件
		vscode.window.showInputBox({
			placeHolder: '请输入文件名字',
			prompt: "请输入要创建的文件的名字",
		}).then(name => {
			fs.mkdirSync(e.fsPath + `\\${name}`);
			fs.writeFileSync(e.fsPath + `\\${name}\\${name}.js`, "hello world", { flag: 'w+' });
		});


	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
