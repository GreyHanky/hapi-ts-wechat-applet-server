/**
 * 枚举转换方法
 */
export default class EnumHelpers {
  // 转换{key,value}[]
  public static getKeyAndValues<T extends number>(e: any) {
    return EnumHelpers.getObjKeys(e).map(n => ({ key: n, value: e[n] as T }));
  }

  public static getNames(e: any) {
    return EnumHelpers.getObjValues(e).filter(
      v => typeof v === "string"
    ) as string[];
  }

  public static getValues<T extends number>(e: any) {
    return EnumHelpers.getObjValues(e).filter(
      v => typeof v === "number"
    ) as T[];
  }

  private static getObjValues(e: any): (number | string)[] {
    return Object.keys(e).map(k => e[k]);
  }

  private static getObjKeys(e: any): (number | string)[] {
    return Object.keys(e);
  }

}
