const fs = require('fs').promises;
const EventEmitter = require('events');

class FileOperations extends EventEmitter {
  constructor() {
    super();
    this.filename = 'new.txt';
  }

  async execute() {
    try {
      // Write initial data
      await fs.writeFile(this.filename, 'This is data');
      this.emit('writeComplete');

      // Append additional data
      await fs.appendFile(this.filename, '\nthat is data');
      this.emit('appendComplete');

      // Read file contents
      const data = await fs.readFile(this.filename, 'utf8');
      this.emit('readComplete', data);

      // Final message
      this.emit('finished');
    } catch (err) {
      this.emit('error', err);
    }
  }
}

const fileOps = new FileOperations();

fileOps.on('writeComplete', () => console.log('Initial write completed'));
fileOps.on('appendComplete', () => console.log('Append completed'));
fileOps.on('readComplete', (data) => {
  console.log('File contents:');
  console.log(data);
});
fileOps.on('finished', () => console.log('Thanks for using my program'));
fileOps.on('error', (err) => console.error('Error:', err));

fileOps.execute();
