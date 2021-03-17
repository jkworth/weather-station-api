import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'rainfall' })
export class Rain {
  @Field()
  @PrimaryColumn({ name: 'last_update', type: 'timestamp' })
  timestamp: Date;

  @Field()
  @Column({ name: 'rainin', type: 'float', precision: 5, scale: 2 })
  inches: number;

  @Field()
  @Column({ type: 'char', length: 1 })
  device: string;

  @Field()
  @Column({ type: 'char', length: 1 })
  source: string;
}
