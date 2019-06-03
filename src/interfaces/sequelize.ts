export interface IDatatypes {
  STRING: "STRING 变长字符串";
  CHAR: "CHAR 定长字符串";
  TEXT: "TEXT 指定为文本列";
  INTEGER: "INTEGER 整型";
  BIGINT: "BIGINT 长整型";
  FLOAT: "FLOAT 浮点数";
  REAL: "REAL 浮点数";
  DOUBLE: "DOUBLE 双精度浮点数";
  DECIMAL: "DECIMAL 小数";
  BOOLEAN: "BOOLEAN 布尔";
  TIME: "TIME 时间类型";
  DATE: "DATE 日期时间类型";
  DATEONLY: "DATEONLY 日期类型";
  HSTORE: "HSTORE 键/值类型";
  JSON: "JSON JSON字符串类型";
  JSONB: "JSONB JSONB类型";
  NOW: "NOW 时间默认值";
  BLOB: "BLOB 二进制类型";
  RANGE: "RANGE Range类型";
  UUID: "UUID UUID类型";
  UUIDV1: "UUIDV1 UUID v1 默认值";
  UUIDV4: "UUIDV4 UUID v4 默认值";
  VIRTUAL: "VIRTUAL 虚拟值";
  ENUM: "ENUM 枚举";
  ARRAY: "ARRAY 数组";
  GEOMETRY: "GEOMETRY 几何类型";
  GEOGRAPHY: "GEOGRAPHY 地理类型";
}
