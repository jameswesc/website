export default function Home() {
    return (
        <div>
            <div className="py-4 px-2 sm:px-4">
                <a className="font-standard font-black text-xl" href="/">
                    {' '}
                    jwsc
                </a>
            </div>

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
