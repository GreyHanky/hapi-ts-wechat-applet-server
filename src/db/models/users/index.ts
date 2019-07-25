import Users, { IUsers } from "./module";
import ModelBase from "../../../helper/model_base";

export default class UserRepository extends ModelBase<Users> {
  constructor() {
    super(Users);
  }

  public async createUser(payload: IUsers) {
    return await this.save(new Users(), payload);
  }
}
