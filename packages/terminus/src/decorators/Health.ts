import {Store} from "@tsed/core";

export function Heatlh(name: string): MethodDecorator {
  return <Function>(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<Function>) => {
    if (descriptor.value) {
      Store.from(target).merge("terminus", {
        [name]: descriptor.value
      });
    }
  };
}
