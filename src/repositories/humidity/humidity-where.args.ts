import { Field, InputType } from '@nestjs/graphql';
import { OperatorBase } from '../common/operator-base';

@InputType()
export class HumidityWhereArgs {
  @Field(() => OperatorBase, { nullable: true })
  relative: Date;

  @Field(() => OperatorBase, { nullable: true })
  timestamp: Date;

  @Field(() => OperatorBase, { nullable: true })
  device: string;

  @Field(() => OperatorBase, { nullable: true })
  source: string;
}
