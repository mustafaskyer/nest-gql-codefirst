import { Query, Resolver } from '@nestjs/graphql';
import { Coffee } from 'src/coffees/entities/coffee.entity/coffee.entity';
import { Drink } from 'src/common/interfaces/drink.interface/drink.interface';
import { DrinksResultUnion } from 'src/common/unions/drinks-results.union';
import { Tea } from 'src/teas/entities/tea.entity/tea.entity';

@Resolver()
export class DrinksResolver {
  @Query(() => [DrinksResultUnion], { name: 'drinks' })
  async findAll(): Promise<(typeof DrinksResultUnion)[]> {
    const coffee = new Coffee();
    coffee.id = 1;
    coffee.name = 'The Coffee';
    coffee.brand = 'The Brand';

    const tea = new Tea();
    tea.name = 'The Tea';

    return [coffee, tea];
  }
}
