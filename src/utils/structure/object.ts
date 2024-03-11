/**
 * Exclude keys from object
 * @param obj
 * @param keys
 * @returns
 */
export const exclude = <Type, Key extends keyof Type>(obj: Type, keys: Key[]): Omit<Type, Key> => {
  for (const key of keys) {
    delete obj[key];
  }
  return obj;
};

/**
 * Pick keys from object
 * @param obj
 * @param keys
 * @returns
 */
export const pick = (obj: object, keys: string[]) => {
  return keys.reduce<{ [key: string]: unknown }>((finalObj, key) => {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key as keyof typeof obj];
    }
    return finalObj;
  }, {});
};

