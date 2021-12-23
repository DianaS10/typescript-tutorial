// namespace App {
//     // autobind decorator
//     export function  autobind(
//         _: any, // target argument is not used
//         _2: string, // methodName argument is not used
//         descriptor: PropertyDescriptor
//         ) {
//         const originalMethod = descriptor.value;
//         const adjDescriptor: PropertyDescriptor = {
//             configurable: true,
//             get() {
//                 const boundFn = originalMethod.bind(this);
//                 return boundFn;
//             }
//         };
//         return adjDescriptor;
//     }
// }

// autobind decorator
export function  autobind(
    _: any, // target argument is not used
    _2: string, // methodName argument is not used
    descriptor: PropertyDescriptor
    ) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}