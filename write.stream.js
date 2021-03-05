const { createReadStream, createWriteStream } = require('fs');

const stream = createReadStream(
    './data/app.log',
    {
        highWaterMark: 95,
        encoding: 'utf-8'
    }
);

const writer = createWriteStream('./data/output.log');

let count = 0
stream.on('data', data => {
    stream.pause();
    console.log(++count);

    writer.write(data);
    setTimeout(() => {
        stream.resume();

    }, 2000)
})

//built-in function to handle mismatched stream speeds. This prevents the Java Memeory heap overflow exception when write is slower than read.
//stream.pipe(writer);