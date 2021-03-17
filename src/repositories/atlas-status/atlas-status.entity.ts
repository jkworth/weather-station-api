import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'atlas_status' })
export class AtlasStatus {
  @Field()
  @PrimaryColumn({ length: 6 })
  battery: string;

  @Field()
  @Column({ type: 'bit' })
  rssi: boolean;

  @Field()
  @Column({ name: 'last_update', type: 'timestamp' })
  timestamp: Date;
}
