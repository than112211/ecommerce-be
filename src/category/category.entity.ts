import { Product } from 'src/product/product.entity';
import { Base } from 'src/shared/entity/base.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class Category extends Base {
  @Column({
    nullable: false,
  })
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
