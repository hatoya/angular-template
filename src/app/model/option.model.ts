export interface IOption<U = string, T = string> {
  value: U | null;
  label: T | null;
}

export function createOption<U = string, T = string>(value: U, label: T): IOption<U, T> {
  return {
    value: value || null,
    label: label || null
  };
}
