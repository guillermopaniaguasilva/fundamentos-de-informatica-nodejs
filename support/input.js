const input = (prompt) => {
  const readline = require('readline').createInterface({
    input: process.stdin,
  });
  console.log(prompt);
  return new Promise((resolve, reject) => {
    try {
      readline.prompt();
      readline.on('line', (line) => {
        readline.close();
        resolve(line);
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = input;
