/** @format */

import {IProject} from "../components/interface/IProject";

export const idAdd = (obj: Array<IProject>) => {
    const allId = obj.map((elem) => elem.id);
    return Math.max(...allId)+1
};
