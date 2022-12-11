/** @format */

import React from "react";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {BsTelegram} from "react-icons/bs";
import "../../styles/footer.scss";

interface GitLinkTg {
    gitLink: string;
    linkedLink: string;
    telegramLink: string;
}

export const AboutDev: React.FC<GitLinkTg> = (props: GitLinkTg) => {
    return (
        <div className='aboutDev'>
            <a href={props.gitLink} target='_blank' rel='noreferrer'>
                <AiFillGithub />
            </a>

            <a href={props.linkedLink} target='_blank' rel='noreferrer'>
                <AiFillLinkedin />
            </a>

            <a href={props.telegramLink} target='_blank' rel='noreferrer'>
                <BsTelegram />
            </a>
        </div>
    );
};
