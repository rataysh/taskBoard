/** @format */

import moment from "moment";
import {IProject} from "./interface/IProject";
import {ITask} from "./interface/ITask";

const testTask: ITask[] = [
    {
        id: 1,
        title: "Discussion",
        description:
            "Discuss the architecture of the application with the developers",
        dateCreate: moment("20221225").format("DD-MMM-YYYY"),
        precedence: "low",
        status: 0,
        timeDuringWork: moment(Date.now())
            .diff(moment("20221225"), "days")
            .toString(),
        comments: [
            {
                id: 1,
                text: "First test comment",
                dateCreate: moment(Date.now()).format(
                    "MMMM Do YYYY, h:mm:ss a"
                ),
            },
            {
                id: 2,
                text: "Second comment",
                dateCreate: moment(Date.now()).format(
                    "MMMM Do YYYY, h:mm:ss a"
                ),
            },
            {
                id: 3,
                text: "Third comment",
                dateCreate: moment(Date.now()).format(
                    "MMMM Do YYYY, h:mm:ss a"
                ),
            },
        ],
        subTasks: [
            {
                id: 1,
                title: "UX/UI",
                description: "Create UX/UI design",
                dateCreate: moment("20221226").format("DD-MMM-YYYY"),
                timeDuringWork: moment(Date.now())
                    .diff(moment("20221226"), "days")
                    .toString(),
                precedence: "medium",
                status: 1,
                comments: [],
            },
            {
                id: 2,
                title: "API",
                description: "API from backend",
                dateCreate: moment("20221226").format("DD-MMM-YYYY"),
                timeDuringWork: moment(Date.now())
                    .diff(moment("20221226"), "days")
                    .toString(),
                dateEnd: moment("20221228").format("DD-MMM-YYYY"),
                precedence: "high",
                status: 2,
                comments: [],
            },
        ],
    },
    {
        id: 2,
        title: "UX/UI",
        description: "Create UX/UI design",
        dateCreate: moment("20221220").format("DD-MMM-YYYY"),
        precedence: "medium",
        status: 1,
        comments: [],
        timeDuringWork: moment(Date.now())
            .diff(moment("20221220"), "days")
            .toString(),
    },
    {
        id: 3,
        title: "API",
        description: "API from backend",
        dateCreate: moment("20221219").format("DD-MMM-YYYY"),
        precedence: "high",
        status: 2,
        comments: [],
        timeDuringWork: moment(Date.now())
            .diff(moment("20221219"), "days")
            .toString(),
        dateEnd: moment("20221220").format("DD-MMM-YYYY"),
    },
];

const secondTestTask: ITask[] = [
    {
        id: 1,
        title: "Meeting with QA",
        description: "Conf call with QA engineer on Monday",
        dateCreate: moment("20221222").format("DD-MMM-YYYY"),
        timeDuringWork: moment(Date.now())
            .diff(moment("20221222"), "days")
            .toString(),
        precedence: "low",
        status: 0,
        comments: [
            {
                id: 1,
                text: "First test comment",
                dateCreate: moment(Date.now()).format(
                    "MMMM Do YYYY, h:mm:ss a"
                ),
            },
        ],
        subTasks: [
            {
                id: 2,
                title: "Sub-task for Dev",
                description: "Create logic",
                dateCreate: moment("20221224").format("DD-MMM-YYYY"),
                timeDuringWork: moment(Date.now())
                    .diff(moment("20221224"), "days")
                    .toString(),
                precedence: "low",
                status: 1,
                comments: [],
            },
        ],
    },
    {
        id: 2,
        title: "Create new order (USA)",
        description: "Discussion of project architecture",
        dateCreate: moment("20221225").format("DD-MMM-YYYY"),
        timeDuringWork: moment(Date.now())
            .diff(moment("20221225"), "days")
            .toString(),
        precedence: "high",
        status: 2,
        dateEnd: moment("20221227").format("DD-MMM-YYYY"),
        comments: [],
    },
    {
        id: 3,
        title: "Looking for a new employee",
        description: "In conjunction with HR",
        dateCreate: moment("20221228").format("DD-MMM-YYYY"),
        timeDuringWork: moment(Date.now())
            .diff(moment("20221228"), "days")
            .toString(),
        precedence: "high",
        status: 0,
        comments: [],
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
        tasks: secondTestTask,
    },
];
