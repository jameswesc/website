import '@/styles/global.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>{Component.title || 'James Wesc'}</title>
                <meta
                    name="description"
                    content={Component.description || ''}
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
