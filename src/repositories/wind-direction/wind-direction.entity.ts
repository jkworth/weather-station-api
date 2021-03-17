import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'winddirection' })
export class WindDirection {
  @Field()
  @PrimaryColumn({ type: 'timestamp' })
  timestamp: Date;

  @Field(() => Int)
  @Column({ type: 'smallint' })
  degrees: number;

  @Field(() => Int, { nullable: true })
  @Column({ type: 'smallint', nullable: true })
  gust: number;

  @Field()
  @Column({ type: 'char', length: 1 })
  device: string;

  @Field()
  @Column({ type: 'char', length: 1 })
  source: string;
}
