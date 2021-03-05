const { convertCsv } = require('../csv.parse');
const { readFileSync } = require('fs');

module.exports.read = () => {

    const dataPath = './data/pulitzer-circulation-data.csv'

    const data = readFileSync(dataPath, "utf-8");

    console.table(convertCsv(data));
}