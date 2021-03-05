const { convertCsv } = require('../csv.parse');
const { read, open, close } = require('fs');

module.exports.read = () => {

    const dataPath = './data/pulitzer-circulation-data.csv';
    const headLength = 300;

    open(dataPath, (err, fd) => {
        const buffer = Buffer.alloc(headLength);
        read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
            console.log(`Read ${count} bytes from ${dataPath}`);
            console.log(buff);
            console.log(buff.toString());
            console.table(convertCsv(buff.toString()));
        })
        close(fd, () => console.log(`file ${fd} closed, operation complete.`));
    });
}