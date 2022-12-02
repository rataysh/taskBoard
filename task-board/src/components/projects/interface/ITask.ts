
export interface ITask {
    id: number;
    title: string;
    description: string;
    dateCreate: number;
    precedence: string;
    status: string;
    timeDuringWork?: number;
    dateEnd?: number;
    file?: File;
}

