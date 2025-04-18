import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ChangePasswordDto, UserRegisterDto } from './user.dto';
import { userError } from 'src/shared/errors/user';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async save(dto: UserRegisterDto): Promise<User> {
    const user = await this.userRepository.findOneBy({
      email: dto.email,
    });

    if (user) {
      throw new BadRequestException(userError.isExistEmail);
    }

    return await this.userRepository.save({
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
    });
  }

  async changePassword(dto: ChangePasswordDto): Promise<User> {
    const user = await this.userRepository.findOneBy({
      id: '123',
    });

    if (!user) {
      throw new BadRequestException(userError.isNotExistUser);
    }

    const isMatch = await bcrypt.compare(dto.currentPassword, user.password);

    if (!isMatch) {
      throw new BadRequestException(userError.isWrongPassword);
    }

    user.password = await bcrypt.hash(dto.newPassword, 10);
    return await this.userRepository.save(user);
  }
}
