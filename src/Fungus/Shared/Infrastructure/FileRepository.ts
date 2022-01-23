import fs from 'fs';

import { AggregateRoot } from '../Domain/AggregateRoot';

import { AddingRegisterToFileFailed } from './AddingRegisterToFileFailed';

export class FileRepository {
  private readonly _filePath: string;

  constructor({ filePath }: { filePath: string }) {
    this._filePath = filePath;
  }

  readAll({ onLineRead }: { onLineRead: (line: any) => void }): void {
    if (fs.existsSync(this._filePath)) {
      const lines = fs
        .readFileSync(this._filePath, 'utf-8')
        .split('\n')
        .filter((line) => line.startsWith('{'));

      lines.map((line) => {
        try {
          const json = JSON.parse(line);

          onLineRead(json);
        } catch (error) {
          console.error(error);
        }
      });
    }
  }

  write(aggregate: AggregateRoot): void {
    fs.appendFile(this._filePath, `${JSON.stringify(aggregate.toPrimitives())}\n`, (err) => {
      if (err) throw new AddingRegisterToFileFailed(aggregate.id());
    });
  }

  cleanContent(): void {
    fs.truncate(this._filePath, 0, () => undefined);
  }
}
