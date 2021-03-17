import { Field, InputType } from '@nestjs/graphql';
import { OperatorBase } from 'src/repositories/common/operator-base';

@InputType()
export class AtlasStatusWhereArgs {
  @Field(() => OperatorBase, { nullable: true })
  battery: string;

  @Field(() => OperatorBase, { nullable: true })
  rssi: boolean;

  @Field(() => OperatorBase, { nullable: true })
  timestamp: Date;
}
