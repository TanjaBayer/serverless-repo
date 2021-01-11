import { Arg, Int, Query, Resolver } from 'type-graphql';

import { createBaseResolver } from './base.resolver';

const AssetBaseResolver = createBaseResolver();

//@Service()
@Resolver()
export class AssetResolver extends AssetBaseResolver {
  @Query((type) => Boolean)
  getAllChild(
    @Arg('first', (type) => Int) first: number,
    @Arg('test', (type) => String) test: string
  ): boolean {
    return true;
  }
}
