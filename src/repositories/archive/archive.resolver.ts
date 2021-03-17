import { Args, Query, Resolver } from '@nestjs/graphql';
import { ShapeWherePipe } from 'src/repositories/common/pipes/shape-where.pipe';
import { ArchiveWhereArgs } from './archive-where.args';
import { Archive } from './archive.entity';
import { ArchiveService } from './archive.service';

@Resolver(() => Archive)
export class ArchiveResolver {
  constructor(private archiveService: ArchiveService) {}

  @Query(() => [Archive], { name: 'archives' })
  async getArchives(
    @Args('where', { nullable: true, type: () => [ArchiveWhereArgs] }, ShapeWherePipe)
    where?: ArchiveWhereArgs[],
  ): Promise<Archive[]> {
    return this.archiveService.findAll(where);
  }
}
