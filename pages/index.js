export default function Home() {
    return (
        <div>
            <div className="p-4">
                <a className="font-standard font-black text-xl" href="/">
                    {' '}
                    jwsc
                </a>
            </div>

            <section className="max-w-4xl mx-auto pt-20 px-4">
                <h2 className="font-brand text-5xl">
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
    )
}
