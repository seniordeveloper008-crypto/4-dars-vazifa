import path from 'path';
import { readFile, writeFile } from 'fs/promises';

// 1-xato to'g'rilandi: backtick (`) ishlatildi
const getFilePath = (fileName) => path.join(process.cwd(), `src/data/${fileName}`);

async function getData(fileName) {
    try {
        const users = await readFile(getFilePath(fileName), "utf8");
        return JSON.parse(users);
    } catch (err) {
        console.log(`Error is on getData function error: ${err.message}`);
    }
}

async function setData(fileName, data) {
    try {
        await writeFile(getFilePath(fileName), JSON.stringify(data, null, 2));
    } catch (err) {
        console.log(`Error is on setData function error: ${err.message}`);
    }
}

export {
    getData, setData
}