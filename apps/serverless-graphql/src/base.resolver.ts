import { Arg, Int, Query, Resolver } from 'type-graphql';

export function createBaseResolver() {
  @Resolver()
  abstract class BaseResolver {
    @Query((type) => Boolean)
    getAll(
      @Arg('first', (type) => Int) first: number,
      @Arg('test', (type) => String) test: string
    ): boolean {
      return true;
    }
  }

  return BaseResolver;
}
