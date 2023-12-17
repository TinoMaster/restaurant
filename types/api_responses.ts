import { TUser } from "./user";

export interface ServerResponseForUsers {
  success: boolean;
  data?: TUser[] | TUser;
  message: string;
}
