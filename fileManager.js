const fs = require('fs');
const readlineSync = require('readline-sync');

const fileManager = {
  userOptions: {
    1: { name: 'Create File', method: 'createFile' },
    2: { name: 'Read File', method: 'readFile' },
    3: { name: 'Append File', method: 'appendFile' },
    4: { name: 'Rename', method: 'rename' },
    5: { name: 'Unlink', method: 'unlink' },
    6: { name: 'Search', method: 'searchFiles' },
    C: { name: 'Customize Colors', method: 'customizeColors' },
    Q: { name: 'Quit', method: 'quit' },
  },

  backgroundColor: 'black',
  fontColor: 'white',

  promptMenu() {
    this.clearConsole();

    const welcomeString = `Hello. Today's date is ${new Date()}`;
    console.log(welcomeString);
    console.log(`${' '.repeat(welcomeString.length / 6)}Type a number and press enter to get started.`);
    console.log(`| ${'-'.repeat(welcomeString.length)} |\n`);

    console.log('Menu Options:');
    for (let key in this.userOptions) {
      console.log(`${key}. ${this.userOptions[key].name}`);
    }

    this.applyColors();

    const selection = readlineSync.question('').toUpperCase();

    if (this.userOptions[selection]) {
      this.clearConsole();
      console.log(`You selected ${this.userOptions[selection].name}`);
      this[this.userOptions[selection].method]();
    } else {
      console.log('Invalid selection. Please try again.\n');
      this.promptMenu();
    }
  },

  createFile() {
    this.clearConsole();

    const fileName = readlineSync.question('Type name of file here along with path/extension: ');
    const data = readlineSync.question('Type content of file here: ');

    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('File created successfully!');
        this.waitForUserInput();
      }
    });
  },

  readFile() {
    this.clearConsole();

    const path = readlineSync.question('Enter the path to the file you want to read: ');

    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
      } else {
        console.log('File content:\n');
        console.log(data);
      }
      this.waitForUserInput();
    });
  },

  appendFile() {
    this.clearConsole();

    const path = readlineSync.question('Enter the path to the file you want to append to: ');
    const data = readlineSync.question('Enter the content you want to append: ');

    fs.appendFile(path, data, (err) => {
      if (err) {
        console.error('Error appending to file:', err);
      } else {
        console.log('Content appended successfully!');
      }
      this.waitForUserInput();
    });
  },

  rename() {
    this.clearConsole();

    const oldPath = readlineSync.question('Enter the path to the file you want to rename: ');
    const newPath = readlineSync.question('Enter the new path and name for the file: ');

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error('Error renaming file:', err);
      } else {
        console.log('File renamed successfully!');
      }
      this.waitForUserInput();
    });
  },

  unlink() {
    this.clearConsole();

    const path = readlineSync.question('Enter the path to the file you want to delete: ');

    fs.unlink(path, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
      } else {
        console.log('File deleted successfully!');
      }
      this.waitForUserInput();
    });
  },

  customizeColors() {
    this.clearConsole();

    console.log('Customize Colors:');
    console.log('Available Background Colors:');
    for (let color in this.colorMap) {
      console.log(`- ${color}`);
    }

    const backgroundColor = readlineSync.question('Enter the background color: ');
    if (this.isValidColor(backgroundColor)) {
      this.backgroundColor = backgroundColor;
    } else {
      console.log('Invalid background color. Using default.');
    }

    console.log('Available Font Colors:');
    for (let color in this.colorMap) {
      console.log(`- ${color}`);
    }

    const fontColor = readlineSync.question('Enter the font color: ');
    if (this.isValidColor(fontColor)) {
      this.fontColor = fontColor;
    } else {
      console.log('Invalid font color. Using default.');
    }

    this.waitForUserInput();
  },

  isValidColor(color) {
    return this.colorMap.hasOwnProperty(color.toLowerCase());
  },

  applyColors() {
    const backgroundColorCode = this.colorMap[this.backgroundColor.toLowerCase()];
    const fontColorCode = this.colorMap[this.fontColor.toLowerCase()];

    const bgColorString = `\x1b[48;5;${backgroundColorCode}m`;
    const fontColorString = `\x1b[38;5;${fontColorCode}m`;

    process.stdout.write(`${bgColorString}${fontColorString}`);
  },

  clearConsole() {
    process.stdout.write('\x1Bc');
  },

  waitForUserInput() {
    console.log('Press [ENTER] to continue.');
    readlineSync.question();
    this.promptMenu();
  },

  quit() {
    this.clearConsole();
    console.log('Goodbye!');
    process.exit(0);
  },

  colorMap: {
    black: 0,
    red: 1,
    green: 2,
    yellow: 3,
    blue: 4,
    magenta: 5,
    cyan: 6,
    white: 7,
  },

  searchFiles() {
    const searchTerm = readlineSync.question("Enter the search term: ");
    const searchPath = readlineSync.question("Enter the directory path to search in: ");

    const searchResults = this.searchFilesRecursive(searchPath, searchTerm);
    if (searchResults.length === 0) {
        console.log(`No files found matching the search term "${searchTerm}" in the directory "${searchPath}".`);
    } else {
        console.log(`Found ${searchResults.length} file(s) matching the search term "${searchTerm}":`);
        searchResults.forEach((filePath, index) => {
            console.log(`${index + 1}. ${filePath}`);
        });
    }
    readlineSync.question('');
},

searchFilesRecursive(directory, searchTerm) {
    let results = [];
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
        const filePath = `${directory}/${file}`;
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            results = results.concat(this.searchFilesRecursive(filePath, searchTerm));
        } else if (file.includes(searchTerm)) {
            results.push(filePath);
        }
    });

    return results;
}
};

fileManager.promptMenu();

module.exports = fileManager;
