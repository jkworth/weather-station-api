import { Injectable, PipeTransform } from '@nestjs/common';
import { Equal, ILike, In, IsNull, LessThan, LessThanOrEqual, Like, MoreThan, MoreThanOrEqual, Not } from 'typeorm';

@Injectable()
export class ShapeWherePipe implements PipeTransform {
  transform(where: any[]) {
    if (where?.length) {
      return this.shapeWhere(where);
    }
  }

  /**
   * A simple helper method that shapes the where clause into the form that TypeORM needs to run the query
   * @param whereClauseArray
   */
  shapeWhere = (whereClauseOptions: any[]): any[] => {
    return whereClauseOptions.map((whereClause) => {
      for (const field in whereClause) {
        if (whereClause[field]['In']) {
          whereClause[field] = In(whereClause[field]['In']);
        }
        if (whereClause[field]['Equal'] !== undefined) {
          whereClause[field] = Equal(whereClause[field]['Equal']);
        }
        if (whereClause[field]['Like'] !== undefined) {
          whereClause[field] = Like(whereClause[field]['Like']);
        }
        if (whereClause[field]['ILike'] !== undefined) {
          whereClause[field] = ILike(whereClause[field]['ILike']);
        }
        if (whereClause[field]['Not'] !== undefined) {
          whereClause[field] = Not(whereClause[field]['Not']);
        }
        if (whereClause[field]['NotILike'] !== undefined) {
          whereClause[field] = Not(ILike(whereClause[field]['NotILike']));
        }
        if (whereClause[field]['MoreThan'] !== undefined) {
          whereClause[field] = MoreThan(whereClause[field]['MoreThan']);
        }
        if (whereClause[field]['MoreThanOrEqualTo'] !== undefined) {
          whereClause[field] = MoreThanOrEqual(whereClause[field]['MoreThanOrEqualTo']);
        }
        if (whereClause[field]['LessThan'] !== undefined) {
          whereClause[field] = LessThan(whereClause[field]['LessThan']);
        }
        if (whereClause[field]['LessThanOrEqualTo'] !== undefined) {
          whereClause[field] = LessThanOrEqual(whereClause[field]['LessThanOrEqualTo']);
        }
        if (whereClause[field]['IsNull']) {
          whereClause[field] = IsNull();
        }
        if (whereClause[field]['IsNull'] !== undefined && whereClause[field]['IsNull'] === false) {
          whereClause[field] = Not(IsNull());
        }
      }

      return whereClause;
    });
  };
}
