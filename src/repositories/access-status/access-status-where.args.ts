import { Field, InputType } from '@nestjs/graphql';
import { OperatorBase } from 'src/repositories/common/operator-base';

@InputType()
export class AccessStatusWhereArgs {
  @Field(() => OperatorBase, { nullable: true })
  battery?: string;

  @Field(() => OperatorBase, { nullable: true })
  timestamp?: Date;
}
