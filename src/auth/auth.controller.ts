import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto, AuthResponseDto } from './auth.dto';
import { TransformInterceptor } from 'src/shared/interceptors/transform.interceptor';
import { IAuthResponse } from './auth.type';
import { IResponseCommon } from 'src/shared/types/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseInterceptors(new TransformInterceptor(AuthResponseDto))
  @Post('login')
  async signIn(
    @Body() body: AuthLoginDto,
  ): Promise<IResponseCommon<IAuthResponse>> {
    const data = await this.authService.signIn(body);
    console.log(data);
    return {
      message: 'Login successfully',
      data,
    };
  }
}
