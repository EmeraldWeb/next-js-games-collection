import Head from 'next/head';
import capitalize from 'lodash/capitalize';

import { Layout } from '../../../../components/layout';
import { ListOfLinks, LinkParams } from '../../../../components/list/ListOfLinks';
import { TopicHeader } from '../../../../components/topic-header';
import { getAllTasksIds, Params } from '../../../../lib/waxbill';

export async function getStaticProps() {
    const paths = getAllTasksIds();

    return {
        props: {
            paths,
        },
    };
}

type Props = {
    paths: Params[],
}

export default function WaxbillList(props: Props): React.ReactElement {
    const links: LinkParams[] = props.paths.map((linkParams: Params) => {
        const { id: url } = linkParams.params;
        return {
            href: `waxbill/${url}`,
            text: capitalize(url),
        }
    });

    console.log('links', links);

    return (
        <Layout>
            <Head>
                <title>Waxbill</title>
            </Head>

            <TopicHeader>Waxbill</TopicHeader>
            <ListOfLinks list={links} />
        </Layout>
    )
}
