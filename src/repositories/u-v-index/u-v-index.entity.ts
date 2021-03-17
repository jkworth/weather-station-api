import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'uvindex' })
export class UVIndex {
  @Field()
  @PrimaryColumn({ type: 'timestamp' })
  timestamp: Date;

  @Field(() => Int)
  @Column({ name: 'uvindex', type: 'tinyint' })
  value: number;
}
