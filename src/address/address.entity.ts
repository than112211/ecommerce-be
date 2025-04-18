import { Base } from 'src/shared/entity/base.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class Address extends Base {
  @Column({
    nullable: false,
  })
  fullname: string;

  @Column({
    nullable: false,
  })
  address: string;

  @Column({
    nullable: false,
  })
  phone: string;

  @Column()
  isDefault: boolean;

  @ManyToOne(() => User)
  user: User;
}
