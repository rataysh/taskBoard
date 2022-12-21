/** @format */

import {IProject} from "../components/interface/IProject";
import { ITask } from "../components/interface/ITask";

// CREATE NEW ID FUNCTION
export const idAdd = (obj: Array<IProject|ITask>) => {
    const allId = obj.map((elem) => elem.id);
    return Math.max(...allId)+1
};
