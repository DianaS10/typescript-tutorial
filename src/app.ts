// /// <reference path="components/project-input.ts" />
// /// <reference path="components/project-list.ts" />

// namespace App { 
//     const prjInput = new ProjectInput();
//     const activePrjList = new ProjectList('active');
//     const finishedPrjList = new ProjectList('finished');
// }


import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');
