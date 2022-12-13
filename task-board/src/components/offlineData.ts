/** @format */

import moment from "moment";
import {IProject} from "./interface/IProject";
import {ITask, IComment} from "./interface/ITask";

export const testTask: ITask[] = [
    {
        id: 0,
        title: "Discussion",
        description:
            "Discuss the architecture of the application with the developers",
        dateCreate: moment(Date.now()).format("DD-MMM-YYYY"),
        precedence: "low",
        status: 0,
        comments: [
            {
                id: 0,
                text: "First test comment",
                dateCreate: moment(Date.now()).format(
                    "MMMM Do YYYY, h:mm:ss a"
                ),
            },
            {
                id: 1,
                text: "Second comment",
                dateCreate: moment(Date.now()).format(
                    "MMMM Do YYYY, h:mm:ss a"
                ),
            },
            {
                id: 2,
                text: "Third comment",
                dateCreate: moment(Date.now()).format(
                    "MMMM Do YYYY, h:mm:ss a"
                ),
            },
        ],
        subTasks: [
            {
                id: 0,
                title: "UX/UI",
                description: "Create UX/UI design",
                dateCreate: moment(Date.now()).format("DD-MMM-YYYY"),
                precedence: "medium",
                status: 1,
            },
            {
                id: 1,
                title: "API",
                description: "API from backend",
                dateCreate: moment(Date.now()).format("DD-MMM-YYYY"),
                precedence: "higth",
                status: 2,
            },
        ],
    },
    {
        id: 1,
        title: "UX/UI",
        description: "Create UX/UI design",
        dateCreate: moment(Date.now()).format("DD-MMM-YYYY"),
        precedence: "medium",
        status: 1,
        // timeDuringWork?: number,
        // dateEnd?: number,
        // file?: File,
    },
    {
        id: 2,
        title: "API",
        description: "API from backend",
        dateCreate: moment(Date.now()).format("DD-MMM-YYYY"),
        precedence: "higth",
        status: 2,
        // timeDuringWork?: number,
        // dateEnd?: number,
        // file?: File,
    },
];

export const dataProject: IProject[] = [
    {
        id: 1,
        title: "TypeScript project",
        description: "This is an appliance store project (React + TypeScript)",
        status: 0,
        tasks: testTask,
    },
    {
        id: 2,
        title: "JavaScript project",
        description: "This is a news site project (React + JavaScript)",
        status: 0,
    },
    {
        id: 3,
        title: "Create new order (USA)",
        description: "Discussion of project architecture",
        status: 0,
    },
    {
        id: 4,
        title: "Looking for a new employee",
        description: "In conjunction with HR",
        status: 0,
    },
];
