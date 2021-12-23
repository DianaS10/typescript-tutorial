// /// <reference path="base-component.ts" />
// /// <reference path="../util/validation.ts" />
// /// <reference path="../decorators/autobind.ts" />
// /// <reference path="../state/project-state.ts" />

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
import Component from './base-component'; // for default export
// import { Validatable, validate } from '../util/validation.js';
import * as Validation from '../util/validation';
// import { autobind } from '../decorators/autobind.js';
// Aliases to avoid name clashes
import { autobind as Autobind } from '../decorators/autobind';
import { projectState } from '../state/project-state';

// ProjectInput Class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    // templeteElement: HTMLTemplateElement;
    // hostElement: HTMLDivElement;
    // element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input');
        // this.templeteElement = <HTMLTemplateElement>document.getElementById('project-input')!;
        // this.templeteElement = document.getElementById('project-input')! as HTMLTemplateElement;
        // this.hostElement =  document.getElementById('app')! as HTMLDivElement;

        // const importedNode = document.importNode(this.templeteElement.content, true);
        // this.element = importedNode.firstElementChild as HTMLFormElement;
        // this.element.id = 'user-input';

        
        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;
        
        this.configure();
        // this.attach();
    }

    configure() {
        // this.element.addEventListener('submit', this.submitHandler.bind(this));
        this.element.addEventListener('submit', this.submitHandler);
    }

    renderContent() {

    }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        const titleValidatable: Validation.Validatable = {
            value: enteredTitle,
            required: true
        };
        const descriptionValidatable: Validation.Validatable = {
            value: enteredDescription,
            required: true,
            minLength: 5
        };
        const peopleValidatable: Validation.Validatable = {
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
            !Validation.validate(peopleValidatable) 
            ) {
                alert('Invalid input, please try again!');
                return;
        } else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }

    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }

    @Autobind
    private submitHandler(event: Event) {
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

    // private attach() {
    //     this.hostElement.insertAdjacentElement('afterbegin', this.element);
    // }
}