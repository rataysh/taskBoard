/** @format */

import React from "react";
import {AboutDev} from "./aboutDev";
import "../../styles/footer.scss";

export const AboutMe: React.FC = () => {
    return (
        <footer className='footer'>
            <div>
                <p className='text-sans font-medium text-2xl text-slate-100'>
                    Designed and Coded By
                </p>
                <p className='flex items-center justify-center space-x-1 text-footer'>
                    Denis Otkidach
                </p>
                <AboutDev
                    gitLink='https://github.com/rataysh'
                    linkedLink='https://www.linkedin.com/in/denis-otkidach-developer/?locale=en_US'
                    telegramLink='https://t.me/alabama_homie'
                />
            </div>
        </footer>
    );
};
