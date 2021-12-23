//Component Base Class
// namespace App {
//     export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
//         templeteElement: HTMLTemplateElement;
//         hostElement: T;
//         element: U; 
//         constructor(
//             templateId: string, 
//             hostElementId: string, 
//             insertAtStart: boolean,
//             newElementId?: string) {
//             this.templeteElement = document.getElementById(templateId)! as HTMLTemplateElement;
//             this.hostElement =  document.getElementById(hostElementId)! as T;
//             const importedNode = document.importNode(this.templeteElement.content, true);
//             this.element = importedNode.firstElementChild as U;
//             if (newElementId) {
//                 this.element.id = newElementId;
//             }
//             this.attach(insertAtStart);
//         }
//         private attach(insertAtBeggining: boolean) {
//             this.hostElement.insertAdjacentElement(
//                 insertAtBeggining ? 'afterbegin' : 'beforeend', 
//                 this.element);
//         }
//         abstract configure(): void;
//         abstract renderContent(): void;
//     }
// }
export const something = '...';
//Component Base Class
// only one default export per file
export default class Component {
    constructor(templateId, hostElementId, insertAtStart, newElementId) {
        this.templeteElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElementId);
        const importedNode = document.importNode(this.templeteElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtBeggining) {
        this.hostElement.insertAdjacentElement(insertAtBeggining ? 'afterbegin' : 'beforeend', this.element);
    }
}
