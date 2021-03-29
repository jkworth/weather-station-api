import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ShapeWherePipe } from 'src/repositories/common/pipes/shape-where.pipe';
import { ArchiveWhereArgs } from './archive-where.args';
import { Archive } from './archive.entity';
import { ArchiveService } from './archive.service';

@Resolver(() => Archive)
export class ArchiveResolver {
  constructor(private service: ArchiveService) {}

  @Query(() => [Archive], { name: 'archives' })
  async getArchives(
    @Args('where', { nullable: true, type: () => [ArchiveWhereArgs] }, ShapeWherePipe)
    where?: ArchiveWhereArgs[],
  ): Promise<Archive[]> {
    return this.service.findAll(where);
  }

  @Subscription(() => Archive)
  newArchiveAdded(): AsyncIterator<Archive> {
    return this.service.getSubscription();
  }
}
