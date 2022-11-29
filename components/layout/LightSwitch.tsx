import { useState, useEffect } from 'react';
import { Toggle } from '../../components/inputs';
import styles from './LightSwitch.module.scss';
import modeColors from '../../styles/variables/color-theme.json';

export function LightSwitch(): React.ReactElement {
    const [isDark, setIsMoon] = useState(false);

    function handleLight(isChecked) {
        setIsMoon(isChecked);
    }

    const mode = isDark ? 'dark' : 'light';
    const icon = isDark ? 'sun' : 'moon';

    useEffect(() => {
        const rootCss = document.querySelector(':root') as HTMLElement;

        if (rootCss) {
            Object.keys(modeColors[mode]).forEach((key) => {
                rootCss.style.setProperty(key, modeColors[mode][key]);
            })
        }
    }, [isDark]);

    return (
        <div className={styles.switcher}>
            <Toggle
                className={styles.toggle}
                callback={handleLight}
                defaultChecked={false}
            />
            <img
                className={styles.icon}
                src={`icons/${icon}.svg`}
                alt={icon}
            />
        </div>
    )
}
