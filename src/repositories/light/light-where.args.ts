import { Field, InputType } from '@nestjs/graphql';
import { OperatorBase } from '../common/operator-base';

@InputType()
export class LightWhereArgs {
  @Field(() => OperatorBase, { nullable: true })
  timestamp: Date;

  @Field(() => OperatorBase, { nullable: true })
  intensity: number;

  @Field(() => OperatorBase, { nullable: true })
  seconds: number;
}
