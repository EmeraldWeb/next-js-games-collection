import Head from 'next/head';

import { Layout } from '../../components/layout';
import { ListOfLinks } from '../../components/list/ListOfLinks';
import { TopicHeader } from '../../components/topic-header';

const links = [
    {
        href: 'code/articles',
        text: 'Code Articles',
    },
    {
        href: 'code/test-tasks',
        text: 'Test Tasks',
    },
]

export default function WaxbillList(): React.ReactElement {
    return (
        <Layout>
            <Head>
                <title>Code</title>
            </Head>

            <TopicHeader>Code</TopicHeader>
            <ListOfLinks list={links} />
        </Layout>
    )
}
