// 纯对象类型
type ObjectAny = Record<string, any>

// 获取纯对象或数组的值类型
type ValueOf<T> = T extends ArrayLike<any> ? T[number] : T[keyof T]
