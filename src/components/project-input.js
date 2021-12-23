// /// <reference path="base-component.ts" />
// /// <reference path="../util/validation.ts" />
// /// <reference path="../decorators/autobind.ts" />
// /// <reference path="../state/project-state.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// namespace App {
//     // ProjectInput Class
//     export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
//         // templeteElement: HTMLTemplateElement;
//         // hostElement: HTMLDivElement;
//         // element: HTMLFormElement;
//         titleInputElement: HTMLInputElement;
//         descriptionInputElement: HTMLInputElement;
//         peopleInputElement: HTMLInputElement;
//         constructor() {
//             super('project-input', 'app', true, 'user-input');
//             // this.templeteElement = <HTMLTemplateElement>document.getElementById('project-input')!;
//             // this.templeteElement = document.getElementById('project-input')! as HTMLTemplateElement;
//             // this.hostElement =  document.getElementById('app')! as HTMLDivElement;
//             // const importedNode = document.importNode(this.templeteElement.content, true);
//             // this.element = importedNode.firstElementChild as HTMLFormElement;
//             // this.element.id = 'user-input';
//             this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
//             this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
//             this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;
//             this.configure();
//             // this.attach();
//         }
//         configure() {
//             // this.element.addEventListener('submit', this.submitHandler.bind(this));
//             this.element.addEventListener('submit', this.submitHandler);
//         }
//         renderContent() {
//         }
//         private gatherUserInput(): [string, string, number] | void {
//             const enteredTitle = this.titleInputElement.value;
//             const enteredDescription = this.descriptionInputElement.value;
//             const enteredPeople = this.peopleInputElement.value;
//             const titleValidatable: Validatable = {
//                 value: enteredTitle,
//                 required: true
//             };
//             const descriptionValidatable: Validatable = {
//                 value: enteredDescription,
//                 required: true,
//                 minLength: 5
//             };
//             const peopleValidatable: Validatable = {
//                 value: +enteredPeople,
//                 required: true,
//                 min: 1,
//                 max: 5
//             };
//             if (
//                 // enteredTitle.trim().length === 0 || 
//                 // enteredDescription.trim().length === 0 || 
//                 // enteredPeople.trim().length === 0
//                 !validate(titleValidatable) ||
//                 !validate(descriptionValidatable) ||
//                 !validate(peopleValidatable) 
//                 ) {
//                     alert('Invalid imput, please try again!');
//                     return;
//             } else {
//                 return [enteredTitle, enteredDescription, +enteredPeople];
//             }
//         }
//         private clearInputs() {
//             this.titleInputElement.value = '';
//             this.descriptionInputElement.value = '';
//             this.peopleInputElement.value = '';
//         }
//         @autobind
//         private submitHandler(event: Event) {
//             event.preventDefault();
//             //console.log(this.titleInputElement.value);
//             const userInput = this.gatherUserInput();
//             if (Array.isArray(userInput)) {
//                 const [title, desc, people] = userInput;
//                 console.log(title, desc, people);
//                 projectState.addProject(title, desc, people);
//                 this.clearInputs();
//             }
//         }
//         // private attach() {
//         //     this.hostElement.insertAdjacentElement('afterbegin', this.element);
//         // }
//     }
// }
// import { Component } from './base-component.js';
import Component from './base-component.js'; // for default export
// import { Validatable, validate } from '../util/validation.js';
import * as Validation from '../util/validation.js';
// import { autobind } from '../decorators/autobind.js';
// Aliases to avoid name clashes
import { autobind as Autobind } from '../decorators/autobind.js';
import { projectState } from '../state/project-state.js';
// ProjectInput Class
export class ProjectInput extends Component {
    constructor() {
        super('project-input', 'app', true, 'user-input');
        // this.templeteElement = <HTMLTemplateElement>document.getElementById('project-input')!;
        // this.templeteElement = document.getElementById('project-input')! as HTMLTemplateElement;
        // this.hostElement =  document.getElementById('app')! as HTMLDivElement;
        // const importedNode = document.importNode(this.templeteElement.content, true);
        // this.element = importedNode.firstElementChild as HTMLFormElement;
        // this.element.id = 'user-input';
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.configure();
        // this.attach();
    }
    configure() {
        // this.element.addEventListener('submit', this.submitHandler.bind(this));
        this.element.addEventListener('submit', this.submitHandler);
    }
    renderContent() {
    }
    gatherUserInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const titleValidatable = {
            value: enteredTitle,
            required: true
        };
        const descriptionValidatable = {
            value: enteredDescription,
            required: true,
            minLength: 5
        };
        const peopleValidatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5
        };
        if (
        // enteredTitle.trim().length === 0 || 
        // enteredDescription.trim().length === 0 || 
        // enteredPeople.trim().length === 0
        !Validation.validate(titleValidatable) ||
            !Validation.validate(descriptionValidatable) ||
            !Validation.validate(peopleValidatable)) {
            alert('Invalid input, please try again!');
            return;
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }
    clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }
    submitHandler(event) {
        event.preventDefault();
        //console.log(this.titleInputElement.value);
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            console.log(title, desc, people);
            projectState.addProject(title, desc, people);
            this.clearInputs();
        }
    }
}
__decorate([
    Autobind
], ProjectInput.prototype, "submitHandler", null);
