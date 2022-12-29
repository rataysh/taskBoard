/** @format */

import moment from "moment";
import {ITask} from "../components/interface/ITask";
import {checkDescription} from "./checkDescription";
import {idAdd} from "./idAdd";

export const newTask = (
    tasks: ITask[] | number,
    name: string,
    description: string,
    precedence: string,
    status: number
) => {
    let id = typeof tasks === "number" ? 0 : idAdd(tasks);
    return {
        id: id,
        title: name,
        description: checkDescription(description),
        dateCreate: moment(Date.now()).toString(),
        precedence: precedence,
        status: status, // 0 - Queue 1 - Development 2 - Done
        timeDuringWork: "0", // template solution
    };
};
