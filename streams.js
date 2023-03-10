const { ChildProcess } = require('child_process');
const fs = require('fs');

const readStream = fs.createReadStream('./docs/bigblog.txt', {encoding : 'utf8'});

const writeStream = fs.createWriteStream('./docs/blogs2.txt'); // this will create a new file blogs2.txt and write data to it.

readStream.on('data' , (chunk) => {
    console.log('------NEW CHUNK-------');
    console.log(chunk);   // when we run the program , we get chunks of data in buffer, use .tostring() to get string format or use encoding above
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
})

// we can also use piping;
/*

    readStream.pipe(writeStream);
*/