import themeColors from '../styles/variables/color-theme.json';
import { eventEmitter } from '../data/event-emitter';
import { eventThemeSwitch, ParamsThemeSwitch } from '../data/event-emitter/event';

type Colors = 'light' | 'dark';

const selector = ':root';
const propertyKey = '--theme-key';

export function switchTheme(newTheme: Colors): void {
    const themes = Object.keys(themeColors);
    if (!themes.includes(newTheme)) {
        console.error(`Error: there is no such color theme "${newTheme}"`);
        return;
    }

    const rootCss = document.querySelector(selector) as HTMLElement;
    if (rootCss) {
        rootCss.style.setProperty(propertyKey, newTheme);
        Object.keys(themeColors[newTheme]).forEach((key) => {
            rootCss.style.setProperty(key, themeColors[newTheme][key]);
        });

        eventEmitter.emit(eventThemeSwitch, <ParamsThemeSwitch>{ theme: newTheme });
    } else {
        console.error(`Error: there is no such html element "${selector}"`);
    }
}

export function getTheme(): string | undefined {
    const rootCss = document.querySelector(selector) as HTMLElement;
    return rootCss?.style.getPropertyValue(propertyKey);
}
