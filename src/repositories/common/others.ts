// export interface DbQueryPayload {
//   where?: any[];
//   paginationCriteria?: { skip?: number | null; take?: number | null };
//   sortAndFilter?: any;
// }

// export enum OrderByOptions {
//   ASC = 'ASC',
//   DESC = 'DESC',
// }

// export enum EntityOptions {
//   IssueTarget = 'IssueTarget',
//   GeoTarget = 'GeoTarget',
//   MissionArea = 'MissionArea',
//   Mission = 'Mission',
//   RicCode = 'RicCode',
//   FundTenure = 'FundTenure',
//   EcCategory = 'EcCategory',
// }

// registerEnumType(OrderByOptions, {
//   name: 'OrderByOptions',
// });

// registerEnumType(EntityOptions, {
//   name: 'EntityOptions',
// });

// @InputType()
// export class PaginationBase {
//   @Field((type) => Int, {
//     nullable: true,
//     description: 'How many records to skip before beginning selection',
//   })
//   skip?: number;

//   @Field((type) => Int, {
//     nullable: true,
//     description: 'How many records to take',
//   })
//   take?: number;
// }
