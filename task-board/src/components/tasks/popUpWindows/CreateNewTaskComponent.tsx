/** @format */

import React, {ChangeEvent} from "react";

interface ICreateNewTaskComponent {
    name: string;
    changeName: (event: ChangeEvent<HTMLInputElement>) => void;
    description: string;
    changeDescription: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    setPrecedence: (precedence: string) => void;
    setStatus: (status: number) => void;
}

export const CreateNewTaskComponent: React.FC<ICreateNewTaskComponent> = ({
    name,
    description,
    changeName,
    changeDescription,
    setPrecedence,
    setStatus,
}) => {
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
                <div className='radio'>
                    <input
                        id='radioPrecedence-1'
                        name='radioPrecedence'
                        type='radio'
                        value={"low"}
                        onChange={(e) => {
                            setPrecedence(e.target.value);
                        }}
                    />
                    <label htmlFor='radio-1' className='radio-label'>
                        Low
                    </label>
                </div>

                <div className='radio'>
                    <input
                        id='radioPrecedence-2'
                        name='radioPrecedence'
                        type='radio'
                        value={"medium"}
                        onChange={(e) => {
                            setPrecedence(e.target.value);
                        }}
                    />
                    <label htmlFor='radio-2' className='radio-label'>
                        Medium
                    </label>
                </div>

                <div className='radio'>
                    <input
                        id='radioPrecedence-3'
                        name='radioPrecedence'
                        type='radio'
                        value={"higth"}
                        onChange={(e) => {
                            setPrecedence(e.target.value);
                        }}
                    />
                    <label htmlFor='radio-3' className='radio-label'>
                        High
                    </label>
                </div>
            </div>
            <div>
                <p>Status</p>
                <div className='radio'>
                    <input
                        id='radioStatus-1'
                        name='radioStatus'
                        type='radio'
                        value={0}
                        onChange={(e) => {
                            setStatus(Number(e.target.value));
                        }}
                    />
                    <label htmlFor='radio-1' className='radio-label'>
                        Queue
                    </label>
                </div>

                <div className='radio'>
                    <input
                        id='radioStatus-2'
                        name='radioStatus'
                        type='radio'
                        value={1}
                        onChange={(e) => {
                            setStatus(Number(e.target.value));
                        }}
                    />
                    <label htmlFor='radio-2' className='radio-label'>
                        Development
                    </label>
                </div>

                <div className='radio'>
                    <input
                        id='radioStatus-3'
                        name='radioStatus'
                        type='radio'
                        value={2}
                        onChange={(e) => {
                            setStatus(Number(e.target.value));
                        }}
                    />
                    <label htmlFor='radio-3' className='radio-label'>
                        Done
                    </label>
                </div>
            </div>
            {/* <div className='file'>
                <p>File</p>
                <div className='containerFile'>
                    <form>
                        <div
                            className='file-upload-wrapper'
                            data-text='Select your file!'>
                            <input
                                name='file-upload-field'
                                type='file'
                                className='file-upload-field'
                                value=''
                            />
                        </div>
                    </form>
                </div>
            </div> */}
        </>
    );
};