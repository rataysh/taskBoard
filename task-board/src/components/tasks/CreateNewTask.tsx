/** @format */

import React from "react";
import {GrClose} from "react-icons/gr";

interface ActiveModal {
    active: boolean;
    setActive: (active: boolean) => void;
}

export const CreateNewTask: React.FC<ActiveModal> = ({active, setActive}) => {
    return (
        <div className={`modal__wrapper ${active ? "open" : "close"}`}>
            <div className='modalBody modalBodyTask'>
                <span onClick={() => setActive(!active)}>
                    <GrClose />
                </span>
                <div>
                    <p>Task name:</p>
                    <input
                        type='text'
                        placeholder='My project'
                        required></input>
                </div>
                <div>
                    <p>Description:</p>
                    <input placeholder='My project description...'></input>
                </div>
                <div>
                    <p>Precedence:</p>
                    <div className='radio'>
                        <input
                            id='radioPrecedence-1'
                            name='radioPrecedence'
                            type='radio'
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
                        />
                        <label htmlFor='radio-3' className='radio-label'>
                            High
                        </label>
                    </div>
                </div>
                <div>
                    <p>Status:</p>
                    <div className='radio'>
                        <input
                            id='radioStatus-1'
                            name='radioStatus'
                            type='radio'
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
                        />
                        <label htmlFor='radio-3' className='radio-label'>
                            Done
                        </label>
                    </div>
                </div>
                <div className='input-file'>
                    <p>File:</p>
                    <label>
                        <input type='file' name='file' />
                        <span className='input-file-btn'>Выберите файл</span>
                    </label>
                </div>
                <button className='effect'>CREATE</button>
            </div>
        </div>
    );
};
