import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsEmail } from 'class-validator';

@InputType()
export class MailerInput {
  @IsEmail()
  @Field(() => String)
  readonly email: string;

  @IsString()
  @Field(() => String)
  readonly first_name: string;

  @IsString()
  @Field(() => String)
  readonly surname: string;
}
