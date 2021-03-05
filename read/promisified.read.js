const { convertCsv } = require('./csv.parse');
const fs = require('fs');
const { promisify } = require('util');

module.exports.read = () => {

    const dataPath = './data/pulitzer-circulation-data.csv'

    const readFile = promisify(fs.readFile);

    readFile(dataPath, 'utf-8')
        .then(data => console.table(convertCsv(data)))
        .catch(err => console.log(`File error: ${err}`));

    const read = async () => {
        const data = await readFile(dataPath, 'utf-8');
        console.table(convertCsv(data));
    };

    read();
}