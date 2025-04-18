import { Base } from 'src/shared/entity/base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class User extends Base {
  @Column({ length: 100, nullable: false })
  fullname: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: false })
  password: string;
}
