import Head from 'next/head';
import styles from './Layout.module.scss';

type Props = {
    children: React.ReactNode,
}

export function Layout({ children }: Props): React.ReactElement {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.layout}>
                <main className={styles.content}>
                    {children}
                </main>
            </div>
        </>
    )
}
