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
export default abstract class Component<T extends HTMLElement, U extends HTMLElement> {
    templeteElement: HTMLTemplateElement; // template we want to render
    hostElement: T; // where we want to render
    element: U; // the concrete element to be rendered

    constructor(
        templateId: string, 
        hostElementId: string, 
        insertAtStart: boolean,
        newElementId?: string) {
        this.templeteElement = document.getElementById(templateId)! as HTMLTemplateElement;
        this.hostElement =  document.getElementById(hostElementId)! as T;

        const importedNode = document.importNode(this.templeteElement.content, true);
        this.element = importedNode.firstElementChild as U;
        if (newElementId) {
            this.element.id = newElementId;
        }

        this.attach(insertAtStart);
    }

    private attach(insertAtBeggining: boolean) {
        this.hostElement.insertAdjacentElement(
            insertAtBeggining ? 'afterbegin' : 'beforeend', 
            this.element);
    }

    abstract configure(): void;
    abstract renderContent(): void;
}