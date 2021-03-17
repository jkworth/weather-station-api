import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'iris_status' })
export class IrisStatus {
  @Field()
  @PrimaryColumn({ length: 6 })
  device: string;

  @Field()
  @Column({ length: 6 })
  battery: string;

  @Field()
  @Column({ type: 'bit' })
  rssi: boolean;

  @Field()
  @Column({ name: 'last_update', type: 'timestamp' })
  timestamp: Date;
}
