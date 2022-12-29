import Head from 'next/head';

import { Layout } from '../../../components/layout';
import { ListOfLinks } from '../../../components/list/ListOfLinks';
import { TopicHeader } from '../../../components/topic-header';

const links = [
    {
        href: 'test-tasks/waxbill',
        text: 'Waxbill',
    },
]

export default function WaxbillList(): React.ReactElement {
    return (
        <Layout>
            <Head>
                <title>Test tasks</title>
            </Head>

            <TopicHeader>Test tasks</TopicHeader>
            <ListOfLinks list={links} />
        </Layout>
    )
}
