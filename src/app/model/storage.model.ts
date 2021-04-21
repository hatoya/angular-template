import { createFile, IFile } from './file.model';
import { createFirestore, IFirestore } from './firestore.model';

export interface IStorage extends IFirestore {
  file: IFile;
}

export function createStorage(item: Partial<IStorage>): IStorage {
  return {
    ...createFirestore(item),
    file: createFile(item.file || {})
  };
}
