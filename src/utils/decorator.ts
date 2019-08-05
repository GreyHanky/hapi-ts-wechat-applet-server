/**
 * 为类方法输入参数添加默认值
 *
 *
 * @param {object} defaultData {default: 'test'}
 */
export function defaultInput(defaultData: object): Function {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    // 保存方法
    const oldval = descriptor.value;
    // 修改原方法
    descriptor.value = function(data: object, ...res: any) {
      const _default = Object.keys(defaultData).reduce((prev, current) => {
        // 判断方法输入参数中是否有 配置的默认值key
        // 防止读取属性 ts类型检查报错使用Reflect对象
        if (!Reflect.has(data, current)) {
          // 将默认值合并对象
          return Object.assign(prev, Reflect.get(defaultData, current));
        }
        return prev;
      }, {});
      // 合并后的参数
      const nextArg = [{ ...data, ..._default }, ...res];
      return oldval.apply(this, nextArg);
    };

    return descriptor;
  };
}
