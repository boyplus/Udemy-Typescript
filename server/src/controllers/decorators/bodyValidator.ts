import 'reflect-metadata';
import { MetaDataKeys } from './MetaDetaKeys';

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string) {
    Reflect.defineMetadata(MetaDataKeys.validator, keys, target, key);
  };
}
