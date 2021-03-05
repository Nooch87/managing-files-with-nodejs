const camelcase = require('camelcase');
const { closeSync, openSync, readdirSync, writeSync, watch } = require('fs');

watch('./read', () => {

    const openfile = openSync('./index.js', 'w');

    const files = readdirSync('./read');

    files.map(f => {
        const name = f.replace('js', '');
        console.log(`Adding File: ${f}`);
        writeSync(
            openfile,
            `module.exports.${camelcase(name)} = require('./read/${name}').read;\n`);
    })

    closeSync(openfile);
});
