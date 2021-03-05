module.exports.asyncReadChunk = require('./read/async.read.chunk.').read;
module.exports.asyncReadHead = require('./read/async.read.head.').read;
module.exports.asyncRead = require('./read/async.read.').read;
module.exports.promisifiedRead = require('./read/promisified.read.').read;
module.exports.readStream = require('./read/read.stream.').read;
module.exports.syncRead = require('./read/sync.read.').read;
module.exports.syncReadPartial = require('./read/sync.read.partial.').read;
