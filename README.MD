# File Manager

The File Manager is a command-line tool developed using Node.js that allows users to perform various file operations such as creating files, reading files, appending to files, renaming files, and deleting files.

## Features

The File Manager currently supports the following features:

1. **Create File:** Allows the user to create a new file by providing a file name and content.
2. **Read File:** Enables the user to read the contents of an existing file by specifying the file path.
3. **Append to File:** Allows the user to append content to an existing file by specifying the file path and the content to be appended.
4. **Rename File:** Enables the user to rename a file by providing the current file path and the new file name.
5. **Delete File:** Allows the user to delete a file by specifying the file path.

## Usage

To use the File Manager, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install`.
3. Run the file manager by executing `node fileManager.js` in your terminal.
4. The program will display a menu with numbered options. Enter the number corresponding to the desired operation and press Enter.
5. Follow the prompts to provide the required information for each operation.
6. The program will execute the selected operation and provide appropriate feedback.

## Examples

Here are a few examples of how to use the File Manager:

1. Creating a file:
   - Select option 1 from the menu.
   - Enter the file name and content when prompted.
   - The program will create the file and display a success message.

2. Reading a file:
   - Select option 2 from the menu.
   - Enter the path to the file you want to read.
   - The program will read the file and display its contents.

3. Appending to a file:
   - Select option 3 from the menu.
   - Enter the path to the file you want to append to.
   - Enter the content you want to append.
   - The program will append the content to the file and display a success message.

4. Renaming a file:
   - Select option 4 from the menu.
   - Enter the current path of the file you want to rename.
   - Enter the new name for the file.
   - The program will rename the file and display a success message.

5. Deleting a file:
   - Select option 5 from the menu.
   - Enter the path to the file you want to delete.
   - The program will delete the file and display a success message.

## License

This project is licensed under the [MIT License](LICENSE).
