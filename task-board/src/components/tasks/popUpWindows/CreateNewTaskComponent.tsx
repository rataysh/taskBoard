/** @format */

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React, {ChangeEvent} from "react";

interface ICreateNewTaskComponent {
    name: string;
    changeName: (event: ChangeEvent<HTMLInputElement>) => void;
    description: string;
    changeDescription: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    setPrecedence: (precedence: string) => void;
    precedence: string;
    setStatus: (status: number) => void;
    status: number;
}

export const CreateNewTaskComponent: React.FC<ICreateNewTaskComponent> = ({
    name,
    description,
    changeName,
    changeDescription,
    setPrecedence,
    precedence,
    setStatus,
    status,
}) => {
    const precedenceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPrecedence((event.target as HTMLInputElement).value);
    };

    const statusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(Number((event.target as HTMLInputElement).value));
    };

    return (
        <>
            <div>
                <p>Task name</p>
                <input
                    value={name}
                    onChange={changeName}
                    type='text'
                    placeholder='My project'
                    required></input>
            </div>
            <div>
                <p>Description</p>
                <textarea
                    value={description}
                    onChange={changeDescription}
                    placeholder='My project description...'></textarea>
            </div>
            <div>
                <p>Precedence</p>
                <FormControl>
                    <FormLabel id='precedence-choose'></FormLabel>
                    <RadioGroup
                        aria-labelledby='precedence-choose'
                        defaultValue='low'
                        name='radio-buttons-group'
                        // sx={{}}
                        value={precedence}
                        onChange={precedenceChange}>
                        <FormControlLabel
                            value='low'
                            control={<Radio />}
                            label='Low'
                        />
                        <FormControlLabel
                            value='medium'
                            control={<Radio />}
                            label='Medium'
                        />
                        <FormControlLabel
                            value='higt'
                            control={<Radio />}
                            label='Higt'
                        />
                    </RadioGroup>
                </FormControl>
            </div>

            <div>
                <p>Status</p>
                <FormControl>
                    <FormLabel id='status-choose'></FormLabel>
                    <RadioGroup
                        aria-labelledby='status-choose'
                        defaultValue='low'
                        name='radio-buttons-group-status'
                        // sx={{}}
                        value={status}
                        onChange={statusChange}>
                        <FormControlLabel
                            value={0}
                            control={<Radio />}
                            label='Queue'
                        />
                        <FormControlLabel
                            value={1}
                            control={<Radio />}
                            label='Development'
                        />
                        <FormControlLabel
                            value={2}
                            control={<Radio />}
                            label='Done'
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
};
