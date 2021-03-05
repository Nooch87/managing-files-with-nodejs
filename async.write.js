const { constants, writeFile } = require('fs');

writeFile(
    './data/app.log',
    '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file=test" 405 21512',
    {flag: 'wx'},
    (err) => {
    err ? console.log(err): console.log('file saved.');
});

/**
 * file operation flags
 * r - Read
 * w - write
 * a - append
 * 
 * "add-on" flags
 * x - exclusive
 * + - multiple modes
 * s - synchronous
 * 
 * ex.
 * wx - throws error if filename already exists
 * r+ - read/write: error if file does not exist
 * w+ - read/write: creates file if doesnt exist
 * a+ - read/append: create if it does not exist
 * 
 * s - refers to operation mode not function execution
 * rs - does not convert open to openSync
 * 
 * valid combinations:
 * r, r+, rs+
 * w, wx, w+, wx+
 * a, ax, a+, ax+, as, as+
 */

writeFile(
    './data/newapp.log',
    '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file=test" 405 21512',
    {mode: constants.S_IWUSR | constants.S_IRUSR},
    (err) => {
    err ? console.log(err): console.log('file saved.');
});

writeFile(
    './data/newapp_x64.log',
    '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file=test" 405 21512',
    {encoding: 'base64'},
    (err) => {
    err ? console.log(err): console.log('file saved.');
});

