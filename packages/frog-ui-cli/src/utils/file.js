import fs from 'fs';

export function readJSON(path) {
    const obj = JSON.parse(fs.readFileSync(path, 'utf8'));
    return obj;
}

export function writeJSON(path, obj) {
    const json = JSON.stringify(obj, null, 4);
    fs.writeFileSync(path, json);
}
