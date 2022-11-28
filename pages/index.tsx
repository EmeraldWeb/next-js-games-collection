import Head from 'next/head';

import { Layout } from '../components/layout';
import { Logo } from '../components/logo';
import styles from '../styles/Home.module.scss';

import { gitHub } from '../const/urls'

export default function Home(): React.ReactElement {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Layout>
                <a
                    className={styles.logoLink}
                    href={gitHub}
                    target={'__blank'}
                >
                    <Logo />
                </a>
            </Layout>
        </>
    );
}
