import { getManager, EntityManager } from "typeorm";

/**
 * 基础model，
 * 包装基本操作api
 * @T 泛型 实体类
 * @constructor Model 实体类
 *
 */
export default class ModelBase<T> {
  private _manager: EntityManager;
  constructor(public Model: Function) {}

  get Manager(): EntityManager {
    if (!this._manager) {
      this._manager = getManager();
    }
    return this._manager;
  }

  public async findOneOrFail(payload: object): Promise<T> {
    return await this.Manager.findOneOrFail(this.Model, payload);
  }

  public async save(entity: T, payload:object) {
    const update = Object.assign(entity, payload);
    return await this.Manager.save(update);
  }
}
