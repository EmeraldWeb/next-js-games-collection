import Head from 'next/head';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

import { Header } from '../../../components/layout/Header';
import { TopicHeader } from '../../../components/topic-header';
import { CodeMirror } from '../../../components/code';
import { getAllTasksIds, getFileContent } from '../../../lib/waxbill';
import styles from '../../../styles/WaxbillTask.module.scss';

export async function getStaticProps({ params }) {
    const originalCode = getFileContent(`${params.id}.tsx`);
    const rewritedCode = getFileContent(`${params.id}.rewrited.tsx`);

    return {
        props: {
            id: params.id,
            originalCode,
            rewritedCode,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllTasksIds();

    return {
        paths,
        fallback: false,
    };
}

type Props = {
    id: string,
    originalCode: string,
    rewritedCode: string,
}

export default function Task(props: Props): React.ReactElement {
    const { id, originalCode, rewritedCode } = props;

    const Dynamic = dynamic(
        () => import(`../../../components/tasks/waxbill/${id}.rewrited.tsx`),
        { suspense: true,}
    )

    const codeSandboxUrl = `https://codesandbox.io/s/${id}`;

    return (
        <div className={styles.layout}>
            <Head>
                <title>{`Waxbill Task: ${id}`}</title>
            </Head>

            <Header />

            <TopicHeader>
                <span>Refactor code from: </span>
                <a
                    className={styles.linkInTopic}
                    href={codeSandboxUrl}
                    target={'_blank'}
                    title={codeSandboxUrl}
                >
                    {`Codesandbox.io`}
                </a>
            </TopicHeader>

            <div className={styles.container}>
                <section className={styles.section}>
                    <h2 className={styles.title}>Description</h2>
                    <p>
                        {codeSandboxUrl}
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.title}>Result</h2>
                    <Suspense fallback={`Loading...`}>
                        <Dynamic />
                    </Suspense>
                </section>
            </div>

            <CodeMirror
                codeLeft={originalCode}
                codeRight={rewritedCode}
                titleLeft={'Original code'}
                titleRight={'Rewrited code'}
            />
        </div>
    );
}
