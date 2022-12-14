import Link from 'next/link';
import styles from './ListOfLinks.module.scss';

export type LinkParams = {
    href: string,
    text?: string,
    outside?: boolean,
}

type Props = {
    list: LinkParams[],
    [key: string]: any,
}

export function ListOfLinks({ list }: Props): React.ReactElement {
    const listArray = list.map((link: LinkParams, index) => {
        const content = link.text ?? link.href;

        let LinkTag;
        if (link.outside) {
            LinkTag = (
                <a
                    className={styles.link}
                    href={link.href}
                    target={'_blank'}
                >
                    {content}
                </a>
            )
        } else {
            LinkTag = (
                <Link
                    className={styles.link}
                    href={link.href}
                >
                    {content}
                </Link>
            )
        }

        return (
            <li
                key={`${index}-${link.href}`}
                className={styles.item}
            >
                {LinkTag}
            </li>
        )
    });

    return (
        <ul className={styles.list}>
            {listArray}
        </ul>
    );
}
