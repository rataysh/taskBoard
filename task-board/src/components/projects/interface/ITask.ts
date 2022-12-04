
export interface ITask {
    id: number;
    title: string;
    description: string;
    dateCreate: string;
    precedence: string;
    status: number; // 0 - Queue 1 - Development 2 - Done
    timeDuringWork?: string;
    dateEnd?: string;
    file?: File;
}

