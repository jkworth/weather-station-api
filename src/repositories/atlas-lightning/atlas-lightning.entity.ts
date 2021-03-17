import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'atlasLightning' })
export class AtlasLightning {
  @Field(() => Int)
  @Column({ name: 'dailystrikes', type: 'smallint' })
  dailyStrikes: number;

  @Field(() => Int)
  @Column({ name: 'currentstrikes', type: 'smallint' })
  currentStrikes: number;

  @Field()
  @PrimaryColumn()
  date: Date;

  @Field()
  @Column({ name: 'last_update', type: 'timestamp' })
  timestamp: Date;
}
