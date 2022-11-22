const fs = require('fs');

const figurasFile1 = fs.readFileSync(__dirname + '/figuras1.json', + 'utf-8');
const figuras1 = JSON.parse(figurasFile1);

const figurasFile2 = fs.readFileSync(__dirname + '/figuras2.json', + 'utf-8');
const figuras2 = JSON.parse(figurasFile2);

const figurasFile3 = fs.readFileSync(__dirname + '/figuras2.json', + 'utf-8');
const figuras3 = JSON.parse(figurasFile3);

module.exports = figuras1, figuras2, figuras3;