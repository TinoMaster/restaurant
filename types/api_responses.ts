export interface ServerResponse<T = any> {
  success: boolean;
  data?: T;
  message: string;
}
