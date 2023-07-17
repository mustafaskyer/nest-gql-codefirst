import { registerEnumType } from '@nestjs/graphql';

export enum CoffeeType {
  ARABICA = 'arabica',
  ROBUSTA = 'robusta',
}

registerEnumType(CoffeeType, {
  name: 'CoffeeType',
});
