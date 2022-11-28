import Head from 'next/head';

export default function Home(): React.ReactNode {
    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>Hello world</main>
        </>
    );
}
