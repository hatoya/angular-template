export interface IFirestore {
  id: string;
  created_at: number;
  updated_at: number;
}

export function createFirestore(item: Partial<IFirestore>): IFirestore {
  return {
    id: item.id || '',
    created_at: item.created_at || 0,
    updated_at: item.updated_at || 0
  };
}
