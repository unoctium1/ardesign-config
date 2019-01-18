import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Scene} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SceneRepository extends DefaultCrudRepository<
  Scene,
  typeof Scene.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Scene, dataSource);
  }
}
