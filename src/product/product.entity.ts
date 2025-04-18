import { Category } from 'src/category/category.entity';
import { Base } from 'src/shared/entity/base.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class Product extends Base {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column('decimal', { nullable: false })
  price: number;

  @Column({ nullable: false })
  main_image: string;

  @Column('text', { array: true, nullable: false })
  sub_images: string[];

  @Column({ nullable: false })
  stock: number;

  @ManyToOne(() => Category, (category) => category.products, {
    nullable: false,
  })
  category: Category;
}
