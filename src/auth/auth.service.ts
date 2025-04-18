import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './auth.dto';
import { IAuthResponse } from './auth.type';
import { userError } from 'src/shared/errors/user';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async signIn(dto: AuthLoginDto): Promise<IAuthResponse> {
    const user = await this.userRepository.findOneBy({
      email: dto.email,
    });
    console.log(user);

    if (!user) {
      throw new UnauthorizedException(userError.isWrongPasswordOrEmail);
    }

    const isMatch = await bcrypt.compare(dto.password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException(userError.isWrongPasswordOrEmail);
    }

    return {
      user,
      accessToken: await this.jwtService.signAsync({
        sub: user.id,
        email: user.email,
      }),
    };
  }
}
