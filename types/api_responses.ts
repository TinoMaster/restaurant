import { TUser } from "./user";

export interface ServerResponseForUsers {
  success: boolean;
  data?: TUser;
  message: string;
}
