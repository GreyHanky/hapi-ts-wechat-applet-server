import { getManager, EntityManager } from "typeorm";

export default class ModelBase<T> {
  public _manager: EntityManager;
  constructor(public Model: Function) {}

  get Manager(): EntityManager {
    if (!this._manager) {
      this._manager = getManager();
    }
    return this._manager;
  }

  public async findOneOrFail(payload: object):Promise<T>{
    return await this.Manager.findOneOrFail(this.Model, payload);
  }

  public async save<T2>(entity: T, payload: T2) {
    const update = Object.assign(entity, payload);
    return await this.Manager.save(update);
  }
}
