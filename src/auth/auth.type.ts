import { User } from 'src/user/user.entity';

export interface IAuth {
  accessToken: string;
}

export interface IAuthResponse {
  user: User;
  accessToken: string;
}
