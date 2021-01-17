import * as firebase from 'firebase/app';
import { IFirestore } from '../model/firestore.model';

interface WhereOp<T extends IFirestore> {
  field: keyof T;
  operator: firebase.default.firestore.WhereFilterOp;
  value: any;
}

interface OrderByOp<T extends IFirestore> {
  field: keyof T;
  direction: firebase.default.firestore.OrderByDirection;
}

export class FirestoreQueryBuilder<T extends IFirestore> {
  private _startAfter?: string;
  private _limit = 10;
  private _where: WhereOp<T>[] = [];
  private _orderBy: OrderByOp<T> = {
    field: 'id',
    direction: 'asc'
  };

  get field() {
    return this._orderBy.field;
  }

  limit(value: number) {
    this._limit = value;
    return this;
  }

  orderBy(field: keyof T, direction: firebase.default.firestore.OrderByDirection = 'desc') {
    this._orderBy = { field, direction };
    return this;
  }

  equalWhere<K extends keyof T>(field: keyof T, value: T[K]) {
    this._where.push({ field, operator: '==', value });
    return this;
  }

  notEqualWhere<K extends keyof T>(field: keyof T, value: T[K]) {
    this._where.push({ field, operator: '!=', value });
    return this;
  }

  startAfter(value: string) {
    this._startAfter = value;
    return this;
  }

  build(query: firebase.default.firestore.Query<T>): firebase.default.firestore.Query<T> {
    query = query.orderBy(this._orderBy.field as string, this._orderBy.direction);
    if (this._startAfter) {
      query = query.startAfter(this._startAfter);
    }
    if (this._limit) {
      query = query.limit(this._limit);
    }
    this._where.forEach(where => (query = query.where(where.field as string, where.operator, where.value)));
    return query;
  }
}
