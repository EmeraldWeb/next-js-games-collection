import fs from 'fs';
import path from 'path';
import * as Buffer from 'buffer';

const tasksDirectory = path.join(process.cwd(), 'components/tasks/waxbill');

export type Params = {
    params: {
        id: string,
        [key: string]: any,
    }
}

export function getAllTasksIds(): Params[] {
    let fileNames: string[] = fs.readdirSync(tasksDirectory);

    fileNames = fileNames.map((fileName) => {
        return fileName.replace(/(\.rewrited)?\.tsx$/gi, '')
    });

    fileNames = [...new Set(fileNames)];

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName,
            },
        };
    });
}

export function getFileContent(fileName: string): string {
    const buffer: Buffer = fs.readFileSync(`${tasksDirectory}/${fileName}`);
    return buffer.toString();
}
