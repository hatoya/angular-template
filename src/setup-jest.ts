import 'jest-preset-angular/setup-jest';
import { randomBytes } from 'crypto';

Object.defineProperty(globalThis, 'crypto', {
  value: {
    getRandomValues: arr => randomBytes(arr.length)
  }
});
