import Link from 'next/link';
import { LightSwitch } from './LightSwitch';
import { Logo } from '../logo';

import styles from './Header.module.scss';

export function Header(): React.ReactElement {
    return (
        <header className={styles.header}>
            <LightSwitch />
            <Link href={'/'}>
                <Logo size={32} />
            </Link>
        </header>
    )
}
