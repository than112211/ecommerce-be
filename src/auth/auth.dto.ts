import { Expose, Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { UserResponseDto } from '../user/user.dto';

export class AuthLoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

export class AuthResponseDto {
  @Expose()
  @Type(() => UserResponseDto)
  user: UserResponseDto;

  @Expose()
  accessToken: string;
}
