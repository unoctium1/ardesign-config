import {Entity, model, property} from '@loopback/repository';

@model()
export class Scene extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'object',
    required: true,
  })
  config: object;


  constructor(data?: Partial<Scene>) {
    super(data);
  }
}
