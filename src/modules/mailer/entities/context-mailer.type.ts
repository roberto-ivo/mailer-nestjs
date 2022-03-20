import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ContextMailerType {
  @Field()
  readonly name: string;

  @Field()
  readonly surname: string;

  @Field()
  readonly password: string;

  @Field()
  readonly email: string;
}
