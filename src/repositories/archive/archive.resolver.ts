import { Query, Resolver, Subscription } from '@nestjs/graphql';
import { Archive } from './archive.entity';
import { ArchiveService } from './archive.service';

@Resolver(() => Archive)
export class ArchiveResolver {
  constructor(private service: ArchiveService) {}

  @Query(() => [Archive])
  async archiveForLast24Hours(): Promise<Archive[]> {
    return this.service.findAllForLast24Hours();
  }

  @Subscription(() => Archive)
  newArchiveAdded(): AsyncIterator<Archive> {
    return this.service.getSubscription();
  }
}
