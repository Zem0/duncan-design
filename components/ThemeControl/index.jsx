import utilStyles from '../../styles/utils.module.sass';
import themeStyles from './index.module.sass';
import { IceCream, Sun, Moon } from '@phosphor-icons/react';
import { useEffect } from 'react';

export default function ThemeControl() {

    function ThemeButton({themeName = "", children}) {
        const setChosenTheme = () => {
            document.documentElement.setAttribute('data-theme', themeName)
            localStorage.setItem('theme', themeName)
        }

        return (
            <div className={`${themeStyles['theme-control__button']} ${utilStyles['flex']} ${utilStyles['flex-row']} ${utilStyles['fully-aligned']} ${themeName}`} onClick={setChosenTheme}>
                {[children]}
                <span>{themeName}</span>
            </div>
        )
    }

    return (
        <div className={`${utilStyles['flex']} ${utilStyles['flex-row']} ${utilStyles['rounded-m']} ${themeStyles['theme-control']}`}>
            <ThemeButton themeName='purple'>
                <IceCream weight="fill"/>
            </ThemeButton>
            <ThemeButton themeName='light'>
                <Sun weight="fill"/>
            </ThemeButton>
            <ThemeButton themeName='dark'>
                <Moon weight="fill"/>
            </ThemeButton>
            <div className={`${themeStyles['theme-control__slider']} slider`}></div>
        </div>
    )
}