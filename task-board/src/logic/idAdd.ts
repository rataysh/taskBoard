/** @format */

import {IProject} from "../components/interface/IProject";

// CREATE NEW ID FUNCTION
export const idAdd = (obj: Array<IProject>) => {
    const allId = obj.map((elem) => elem.id);
    return Math.max(...allId)+1
};
