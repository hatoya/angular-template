export interface IFile {
  name: string;
  path: string;
}

export function createFile(item: Partial<IFile>): IFile {
  return {
    name: item.name || '',
    path: item.path || ''
  };
}
