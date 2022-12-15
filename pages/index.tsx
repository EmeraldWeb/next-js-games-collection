import Head from 'next/head';

import { Layout } from '../components/layout';
import { Logo } from '../components/logo';
import { ListOfLinks } from '../components/list';
import styles from '../styles/Home.module.scss';

import { gitHub } from '../const/urls'

const links = [
    {
        href: '/test-tasks/waxbill',
        text: 'Waxbill',
    }
]

export default function Home(): React.ReactElement {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <Layout>
                <div className={styles.logoLink}>
                    <a
                        href={gitHub}
                        target={'__blank'}
                        rel={'noreferrer'}
                    >
                        <Logo />
                    </a>
                </div>

                <ListOfLinks
                    list={links}
                />
            </Layout>
        </>
    );
}
