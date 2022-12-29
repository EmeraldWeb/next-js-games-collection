import Head from 'next/head';

import { Layout } from '../../../components/layout';
import { ListOfLinks } from '../../../components/list/ListOfLinks';
import { TopicHeader } from '../../../components/topic-header';

const links = [
    {
        href: 'articles/testing-implementation-details',
        text: 'Testing Implementation Details (RU)',
    },
]

export default function WaxbillList(): React.ReactElement {
    return (
        <Layout>
            <Head>
                <title>Code Articles</title>
            </Head>

            <TopicHeader>Code Articles</TopicHeader>
            <ListOfLinks list={links} />
        </Layout>
    )
}
