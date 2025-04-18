export interface IResponseCommon<T> {
  message: string;
  data?: T;
  pagination?: any;
}
