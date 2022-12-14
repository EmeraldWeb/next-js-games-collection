import styles from './TopicHeader.module.scss';

type Props = {
    children: ChildNode | string,
}

export function TopicHeader({ children }): React.ReactElement {
    return (
        <h1 className={styles.header}>
            {children}
        </h1>
    )
}
