import { firestore } from 'firebase/app';

export interface IFirestore {
  id: string;
  created_at: firestore.Timestamp;
  updated_at: firestore.Timestamp;
}

export function createFirestore(item: Partial<IFirestore>): IFirestore {
  return {
    id: item.id || '',
    created_at: item.created_at || null,
    updated_at: item.updated_at || null
  };
}
