import styles from './Header.module.scss';
import { LightSwitch } from './LightSwitch';

export function Header() {
    return (
        <header className={styles.header}>
            <LightSwitch />
        </header>
    )
}
