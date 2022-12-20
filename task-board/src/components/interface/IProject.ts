import { ITask } from "./ITask";

export interface IProject {
    id: number;
    title: string;
    description: string;
    status: number;  //0 if in work or 1 if done
    tasks: ITask[];
}


