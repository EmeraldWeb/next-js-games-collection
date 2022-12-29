import Head from 'next/head';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

import { Header } from '../../../../components/layout/Header';
import { TopicHeader } from '../../../../components/topic-header';
import { CodeMirror } from '../../../../components/code';
import { getAllTasksIds, getFileContent, getTasksDescriptions } from '../../../../lib/waxbill';
import styles from '../../../../styles/WaxbillTask.module.scss';

export async function getStaticProps({ params }) {
    const originalCode = getFileContent(`${params.id}.tsx`);
    const rewritedCode = getFileContent(`${params.id}.rewrited.tsx`);
    const allDescriptions = getTasksDescriptions();

    return {
        props: {
            id: params.id,
            originalCode,
            rewritedCode,
            description: allDescriptions[params.id],
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
    description?: string,
}

export default function Task(props: Props): React.ReactElement {
    const { id, originalCode, rewritedCode, description } = props;

    const Dynamic = dynamic(
        () => import(`../../../../components/tasks/waxbill/${id}.rewrited.tsx`),
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
                    rel={'noreferrer'}
                    title={codeSandboxUrl}
                >
                    {`Codesandbox.io`}
                </a>
            </TopicHeader>

            <div className={styles.container}>
                <section className={styles.section}>
                    <h2 className={styles.title}>Description</h2>
                    <p className={styles.description}>
                        {id}
                        <br />
                        {description}
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
