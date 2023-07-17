import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType({ description: 'The drink interface' })
export abstract class Drink {
  @Field()
  name: string;
}
