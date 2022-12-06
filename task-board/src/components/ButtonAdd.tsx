/** @format */

import React from "react";
import "../styles/addNewProjButton.scss";

interface ButtonText {
    text: string;
    setActive: (active:boolean) => void;
}

export const ButtonAdd: React.FC<ButtonText> = ({text, setActive}) => {
    return (
        <>
            <button className='effect effect-2' onClick={() => setActive(true)}>
                <span>{text}</span>
            </button>
        </>
    );
};
