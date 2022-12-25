import Image from 'next/image';

import styles from './Logo.module.scss';

type Props = {
    size?: number,
}

export function Logo(props: Props): React.ReactElement {
    const size = props.size ?? 200;
    return (
        <Image
            priority
            src="/images/logo.png"
            className={styles.logo}
            height={size}
            width={size}
            alt="EmeraldWeb"
        />
    )
}
