import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { from } from 'rxjs';

export function axios$(config: AxiosRequestConfig) {
  return from(axios(config).then());
}
