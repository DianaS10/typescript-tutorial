// /// <reference path="components/project-input.ts" />
// /// <reference path="components/project-list.ts" />
// namespace App { 
//     const prjInput = new ProjectInput();
//     const activePrjList = new ProjectList('active');
//     const finishedPrjList = new ProjectList('finished');
// }
import { ProjectInput } from './components/project-input.js';
import { ProjectList } from './components/project-list.js';
const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');
