import { Expose } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import {
  MAX_LENGTH,
  MESSAGES,
  MIN_LENGTH,
  REGEX,
} from 'src/shared/constants/common';
import { EGender } from 'src/shared/enums/common';

export class UserResponseDto {
  @Expose()
  id: number;

  @Expose()
  fullname: string;

  @Expose()
  email: string;

  @Expose()
  avatar: string;

  @Expose()
  gender: string;

  @Expose()
  phone: string;
}

export class UserRegisterDto {
  @IsNotEmpty()
  @MaxLength(MAX_LENGTH.COMMON)
  fullname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsPhoneNumber('VN')
  phone: string;

  @IsEnum(EGender)
  @IsOptional()
  gender: string;

  @IsNotEmpty()
  @MinLength(MIN_LENGTH.PASSWORD)
  @MaxLength(MAX_LENGTH.PASSWORD)
  @Matches(REGEX.PASSWORD, {
    message: MESSAGES.PASSWORD_VALID,
  })
  password: string;
}

export class ChangePasswordDto {
  @IsNotEmpty()
  @MinLength(MIN_LENGTH.PASSWORD)
  @MaxLength(MAX_LENGTH.PASSWORD)
  @Matches(REGEX.PASSWORD, {
    message: MESSAGES.PASSWORD_VALID,
  })
  currentPassword: string;

  @IsNotEmpty()
  @MinLength(MIN_LENGTH.PASSWORD)
  @MaxLength(MAX_LENGTH.PASSWORD)
  @Matches(REGEX.PASSWORD, {
    message: MESSAGES.PASSWORD_VALID,
  })
  newPassword: string;
}
