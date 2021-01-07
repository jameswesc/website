module.exports = {
    purge: ['./pages/**/*', './components/**/*'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                brand: ['NeueMachina', 'sans-serif'],
                standard: ['Inter', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
