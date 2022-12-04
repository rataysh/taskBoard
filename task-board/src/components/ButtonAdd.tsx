/** @format */

import React from "react";
import "../styles/addNewProjButton.scss";

interface ButtonText {
    text: string;
}

export const ButtonAdd: React.FC<ButtonText> = (props) => {
    return (
        <>
            <button className='effect effect-2'>
                <span>{props.text}</span>
            </button>
        </>
    );
};
