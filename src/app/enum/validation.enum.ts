export enum EValidation {
  required = 'This field is required',
  email = 'Email format is incorrect',
  minlength = 'Expect ${requiredLength} but got ${actualLength}',
  maxlength = 'Expect ${requiredLength} but got ${actualLength}',
  included = 'Invalid value',
  daterange = 'Invalid value'
}
