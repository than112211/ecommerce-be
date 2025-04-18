import {
  Body,
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { IResponseCommon } from 'src/shared/types/common';
import { User } from './user.entity';
import {
  ChangePasswordDto,
  UserRegisterDto,
  UserResponseDto,
} from './user.dto';
import { TransformInterceptor } from 'src/shared/interceptors/transform.interceptor';
import { MESSAGES } from 'src/shared/constants/common';
import { JwtAuthGuard } from 'src/shared/guard/jwt-auth.guard';
import { CurrentUser } from 'src/shared/decorator/current-user.decorator';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseInterceptors(new TransformInterceptor(UserResponseDto))
  @Post('register')
  async register(
    @Body() body: UserRegisterDto,
  ): Promise<IResponseCommon<User>> {
    console.log(body);
    const data = await this.userService.save(body);

    return {
      message: MESSAGES.CREATE_SUCCESS,
      data,
    };
  }

  @Post('change-password')
  @UseGuards(JwtAuthGuard)
  async changePassword(
    @CurrentUser() user: User,
    @Body() body: ChangePasswordDto,
  ): Promise<IResponseCommon<User>> {
    console.log(user);
    const data = await this.userService.changePassword(body);

    return {
      message: MESSAGES.UPDATE_SUCCESS,
      data,
    };
  }
}
