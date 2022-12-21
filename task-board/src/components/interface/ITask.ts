/** @format */

export interface ITask {
    id: number;
    title: string;
    description: string;
    dateCreate: string;
    precedence: string; // low - medium - higth
    status: number; // 0 - Queue 1 - Development 2 - Done
    timeDuringWork?: string;
    dateEnd?: string;
    file?: File;
    subTasks?: ITask[];
    comments?: IComment[];
}

export interface IComment {
    id: number;
    text: string;
    dateCreate: string;
}
