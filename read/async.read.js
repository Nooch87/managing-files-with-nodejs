const { convertCsv } = require('../csv.parse');

const { readFile } = require('fs');


module.exports.read = () => {

    const dataPath = './data/pulitzer-circulation-data.csv'


    readFile(dataPath, "utf-8", (err, data) => {
        if (err) {
            console.log(`There was a problem with the file ${err}`);
            return;
        }
        const vals = convertCsv(data);
        console.table(vals);


    });
}