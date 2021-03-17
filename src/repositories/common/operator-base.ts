import { Field, InputType } from '@nestjs/graphql';
import graphqlTypeJson from 'graphql-type-json';

@InputType()
export class OperatorBase {
  @Field(() => graphqlTypeJson, {
    nullable: true,
    description: 'An ARRAY of strings or numbers',
  })
  In?: string[] | number[];

  @Field(() => graphqlTypeJson, {
    nullable: true,
    description: 'A single number, boolean, or string value',
  })
  Equal?: number | string | boolean;

  @Field(() => graphqlTypeJson, {
    nullable: true,
    description: 'Case Sensitive, Contains a single number, boolean, or string value',
  })
  Like?: number | string | boolean;

  @Field(() => graphqlTypeJson, {
    nullable: true,
    description: 'Not Case Sensitive, Contains a single number, boolean, or string value',
  })
  ILike?: number | string | boolean;

  @Field(() => graphqlTypeJson, {
    nullable: true,
    description: 'Not Case Sensitive, Does not contain a single number, boolean, or string value',
  })
  NotILike?: number | string | boolean;

  @Field(() => graphqlTypeJson, {
    nullable: true,
    description: 'A single number, boolean, or string value',
  })
  Not?: number | string | boolean;

  @Field(() => graphqlTypeJson, {
    nullable: true,
    description: 'Comparison between two numbers or dates, if one is greater than the other',
  })
  MoreThan?: number | Date;

  @Field(() => graphqlTypeJson, {
    nullable: true,
    description: 'Comparison between two numbers or dates, if one is greater than or equal to the other',
  })
  MoreThanOrEqualTo?: number | Date;

  @Field(() => graphqlTypeJson, {
    nullable: true,
    description: 'Comparison between two numbers or dates, if one is less than the other',
  })
  LessThan?: number | Date;

  @Field(() => graphqlTypeJson, {
    nullable: true,
    description: 'Comparison between two numbers or dates, if one is less than or equal to the other',
  })
  LessThanOrEqualTo?: number | Date;

  @Field(() => graphqlTypeJson, {
    nullable: true,
    description: 'Pass true or false to this operator to return if column value is null or not',
  })
  IsNull?: boolean;
}
