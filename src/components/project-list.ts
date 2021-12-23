// /// <reference path="base-component.ts" />
// /// <reference path="../decorators/autobind.ts" />
// /// <reference path="../models/drag-drop.ts" />
// /// <reference path="../models/project.ts" />
// /// <reference path="../state/project-state.ts" />

// namespace App {
//     // ProjectList  Class 
//     export class ProjectList extends Component<HTMLDivElement, HTMLElement>
//     implements DragTarget {
//         // templeteElement: HTMLTemplateElement;
//         // hostElement: HTMLDivElement;
//         // element: HTMLElement; // <section>
//         asignedProjects: Project[];

//         constructor(private type: 'active' | 'finished') {
//             super('project-list', 'app', false, `${type}-projects`);
//             // this.templeteElement = document.getElementById('project-list')! as HTMLTemplateElement;
//             // this.hostElement =  document.getElementById('app')! as HTMLDivElement;
//             this.asignedProjects = [];

//             // const importedNode = document.importNode(this.templeteElement.content, true);
//             // this.element = importedNode.firstElementChild as HTMLElement;
//             // this.element.id = `${type}-projects`;

//             this.configure();

//             // this.attach();
//             this.renderContent();
//         }

//         @autobind
//         dragOverHandler(event: DragEvent) {
//             if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
//                 event.preventDefault();
//                 const listEl = this.element.querySelector('ul')!;
//                 listEl.classList.add('droppable');
//             }    
//         }

//         @autobind
//         dropHandler(event: DragEvent) {
//             const prjId = event.dataTransfer!.getData('text/plain');
//             projectState.moveProject(prjId, 
//                 this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished);
//         }

//         @autobind
//         dragLeaveHandler(_: DragEvent) {
//             const listEl = this.element.querySelector('ul')!;
//             listEl.classList.remove('droppable');
//         }

//         configure() {
//             this.element.addEventListener('dragover', this.dragOverHandler);
//             this.element.addEventListener('dragleave', this.dragLeaveHandler);
//             this.element.addEventListener('drop', this.dropHandler);

//             projectState.addListener((projects: Project[]) => {
//                 const relevantProjects = projects.filter(prj => {
//                     if (this.type === 'active') {
//                         return prj.status === ProjectStatus.Active;
//                     }
//                     return prj.status === ProjectStatus.Finished;
//                 });
//                 this.asignedProjects = relevantProjects;
//                 this.renderProjects();
//             });
//         }

//         renderContent() {
//             const listId = `${this.type}-projects-list`;
//             this.element.querySelector('ul')!.id = listId;
//             this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
//         }

//         private renderProjects() {
//             const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
//             listEl.innerHTML = '';
//             for (const prjItem of this.asignedProjects) {
//                 // const listItem = document.createElement('li');
//                 // listItem.textContent = prjItem.title;
//                 // listEl.appendChild(listItem);
//                 new ProjectItem(this.element.querySelector('ul')!.id, prjItem);
//             }
//         }

//         // private attach() {
//         //     this.hostElement.insertAdjacentElement('beforeend', this.element);
//         // }
//     }
// }

import { DragTarget } from '../models/drag-drop';
import { Project, ProjectStatus } from '../models/project';
// import { Component } from './base-component.js';
import Component from './base-component';
import { autobind } from '../decorators/autobind';
import { projectState } from '../state/project-state';
import { ProjectItem } from './project-item';

// ProjectList  Class 
export class ProjectList extends Component<HTMLDivElement, HTMLElement>
implements DragTarget {
    // templeteElement: HTMLTemplateElement;
    // hostElement: HTMLDivElement;
    // element: HTMLElement; // <section>
    asignedProjects: Project[];

    constructor(private type: 'active' | 'finished') {
        super('project-list', 'app', false, `${type}-projects`);
        // this.templeteElement = document.getElementById('project-list')! as HTMLTemplateElement;
        // this.hostElement =  document.getElementById('app')! as HTMLDivElement;
        this.asignedProjects = [];

        // const importedNode = document.importNode(this.templeteElement.content, true);
        // this.element = importedNode.firstElementChild as HTMLElement;
        // this.element.id = `${type}-projects`;

        this.configure();

        // this.attach();
        this.renderContent();
    }

    @autobind
    dragOverHandler(event: DragEvent) {
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault();
            const listEl = this.element.querySelector('ul')!;
            listEl.classList.add('droppable');
        }    
    }

    @autobind
    dropHandler(event: DragEvent) {
        const prjId = event.dataTransfer!.getData('text/plain');
        projectState.moveProject(prjId, 
            this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished);
    }

    @autobind
    dragLeaveHandler(_: DragEvent) {
        const listEl = this.element.querySelector('ul')!;
        listEl.classList.remove('droppable');
    }

    configure() {
        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
        this.element.addEventListener('drop', this.dropHandler);

        projectState.addListener((projects: Project[]) => {
            const relevantProjects = projects.filter(prj => {
                if (this.type === 'active') {
                    return prj.status === ProjectStatus.Active;
                }
                return prj.status === ProjectStatus.Finished;
            });
            this.asignedProjects = relevantProjects;
            this.renderProjects();
        });
    }

    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';
    }

    private renderProjects() {
        const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
        listEl.innerHTML = '';
        for (const prjItem of this.asignedProjects) {
            // const listItem = document.createElement('li');
            // listItem.textContent = prjItem.title;
            // listEl.appendChild(listItem);
            new ProjectItem(this.element.querySelector('ul')!.id, prjItem);
        }
    }

    // private attach() {
    //     this.hostElement.insertAdjacentElement('beforeend', this.element);
    // }
}