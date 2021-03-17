import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'light' })
export class Light {
  @Field({ nullable: true })
  @PrimaryColumn({ type: 'timestamp' })
  timestamp: Date;

  @Field(() => Int)
  @Column({ name: 'lightintensity', type: 'mediumint' })
  intensity: number;

  @Field(() => Int)
  @Column({ name: 'measured_light_seconds', type: 'smallint' })
  seconds: number;
}
