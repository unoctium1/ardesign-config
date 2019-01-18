import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Scene} from '../models';
import {SceneRepository} from '../repositories';

export class SceneController {
  constructor(
    @repository(SceneRepository)
    public sceneRepository : SceneRepository,
  ) {}

  @post('/scenes', {
    responses: {
      '200': {
        description: 'Scene model instance',
        content: {'application/json': {schema: {'x-ts-type': Scene}}},
      },
    },
  })
  async create(@requestBody() scene: Scene): Promise<Scene> {
    return await this.sceneRepository.create(scene);
  }

  @get('/scenes/count', {
    responses: {
      '200': {
        description: 'Scene model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Scene)) where?: Where,
  ): Promise<Count> {
    return await this.sceneRepository.count(where);
  }

  @get('/scenes', {
    responses: {
      '200': {
        description: 'Array of Scene model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Scene}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Scene)) filter?: Filter,
  ): Promise<Scene[]> {
    return await this.sceneRepository.find(filter);
  }

  @patch('/scenes', {
    responses: {
      '200': {
        description: 'Scene PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() scene: Scene,
    @param.query.object('where', getWhereSchemaFor(Scene)) where?: Where,
  ): Promise<Count> {
    return await this.sceneRepository.updateAll(scene, where);
  }

  @get('/scenes/{id}', {
    responses: {
      '200': {
        description: 'Scene model instance',
        content: {'application/json': {schema: {'x-ts-type': Scene}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Scene> {
    return await this.sceneRepository.findById(id);
  }

  @patch('/scenes/{id}', {
    responses: {
      '204': {
        description: 'Scene PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() scene: Scene,
  ): Promise<void> {
    await this.sceneRepository.updateById(id, scene);
  }

  @put('/scenes/{id}', {
    responses: {
      '204': {
        description: 'Scene PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() scene: Scene,
  ): Promise<void> {
    await this.sceneRepository.replaceById(id, scene);
  }

  @del('/scenes/{id}', {
    responses: {
      '204': {
        description: 'Scene DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sceneRepository.deleteById(id);
  }
}
