import readline from 'readline';
import fs from 'fs';

import { AggregateRoot } from '../Domain/AggregateRoot';

import { AddingRegisterToFileFailed } from './AddingRegisterToFileFailed';

export class FileRepository {
  private readonly _filePath: string;

  constructor({ filePath }: { filePath: string }) {
    this._filePath = filePath;
  }

  readAll({
    onLineRead,
    onFinish = (): void => undefined,
  }: {
    onLineRead: (line: any) => void;
    onFinish?: () => void;
  }): void {
    const lineReader = readline.createInterface({
      input: fs.createReadStream(this._filePath),
      crlfDelay: Infinity,
    });

    lineReader.on('close', onFinish);
    lineReader.on('line', (line) => {
      const json = JSON.parse(line);

      onLineRead(json);
    });
  }

  write(aggregate: AggregateRoot): void {
    fs.appendFile(this._filePath, `${JSON.stringify(aggregate.toPrimitives())}\n`, (err) => {
      if (err) throw new AddingRegisterToFileFailed(aggregate.id());
    });
  }
}
