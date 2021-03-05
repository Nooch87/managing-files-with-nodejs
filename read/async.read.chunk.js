const { stat, open, read, close } = require('fs');

module.exports.read = () => {
    const dataPath = './data/app.log'
    let totalSize = 0;

    stat(dataPath, (err, { size }) => totalSize = size);

    open(dataPath, (err, fd) => {
        const buffer = Buffer.alloc(200);

        for (let i = 0; i <= totalSize / buffer.length; i++) {
            read(fd, buffer, 0, buffer.length, i * buffer.length, (err, count, buff) => {
                console.log(`${i}: ${buff.toString()}`);
            })
        }
        close(fd, () => console.log(`file ${fd} closed, operation complete.`));
    });
}
