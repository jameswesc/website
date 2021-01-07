import Header from '@/components/Header'

const Home = () => {
    return (
        <div>
            <Header />

            <div className="px-4 sm:px-4 pt-8 md:pt-12 lg:pt-20">
                <section className="max-w-4xl mx-auto">
                    <h2 className="font-brand text-3xl md:text-4xl lg:text-5xl">
                        👋 Hi
                        <br />
                        <br />
                        I'm James Wesc.
                        <br />
                        <br />
                        A Designer / Developer for the modern web.
                        <br />
                        <br />
                        Currently, Head of Interaction Design at{' '}
                        <a
                            className="underline"
                            href="https://smashdelta.com"
                            target="__blank"
                        >
                            Smash Delta
                        </a>
                        .
                    </h2>
                    <p className="pt-20 text-sm">🚧 Site under construction.</p>
                </section>
            </div>
        </div>
    )
}

Home.title = 'James Wesc - Designer / Developer'
Home.description =
    'James Wesc is a Sydney based Designer / Developer for the modern web.'

export default Home
