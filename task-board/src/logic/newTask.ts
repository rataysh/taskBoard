/** @format */

import moment from "moment";
import {ITask} from "../components/interface/ITask";
import {checkDescription} from "./checkDescription";
import {idAdd} from "./idAdd";

export const newTask = (
    tasks: ITask[],
    name: string,
    description: string,
    precedence: string,
    status: number
) => {
    return {
        id: idAdd(tasks),
        title: name,
        description: checkDescription(description),
        dateCreate: moment(Date.now()).format("DD-MMM-YYYY"),
        precedence: precedence,
        status: status, // 0 - Queue 1 - Development 2 - Done
    };
};
