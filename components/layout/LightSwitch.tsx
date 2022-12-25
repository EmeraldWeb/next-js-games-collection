import { useState, useEffect } from 'react';
import { Toggle } from '../../components/inputs';
import { switchTheme } from '../../services/color-theme-switcher';
import styles from './LightSwitch.module.scss';

export function LightSwitch(): React.ReactElement {
    const [isDark, setIsMoon] = useState(false);

    function handleLight(isChecked) {
        setIsMoon(isChecked);
    }

    const mode = isDark ? 'dark' : 'light';
    const icon = isDark ? 'sun' : 'moon';

    useEffect(() => {
        switchTheme(mode);
    }, [isDark]);

    return (
        <div className={styles.switcher}>
            <Toggle
                className={styles.toggle}
                callback={handleLight}
                defaultChecked={false}
                alt={'LightSwitch'}
            />
            <img
                className={styles.icon}
                src={`/icons/${icon}.svg`}
                alt={icon}
            />
        </div>
    )
}
