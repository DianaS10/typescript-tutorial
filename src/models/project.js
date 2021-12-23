// namespace App {
//     export enum ProjectStatus {
//         Active,
//         Finished
//     }
//     export class Project {
//         constructor(public id: string, 
//             public title: string, 
//             public description: string,
//             public people: number,
//             public status: ProjectStatus
//             ) {}
//     }
// }
export var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
export class Project {
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}
