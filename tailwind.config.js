mudule.exports = {
    theme: {
        extend: {
            colors: {
                'dark-primary': '#020917',
                'dark-secondary': '#101725',
            },
            backgroundImage: {
                'linear-to-b': 'linear-gradient(to bottom, var(--color-dark-primary), var(--color-dark-secondary))',
            },
            keyframes: {
                float: {
                    "0%, 100%": {
                        transform: "translateY(0px) rotateY(-12deg) rotateX(6deg)"
                    },
                    "50%": {
                        transform: "translateY(-10px) rotateY(-12deg) rotateX(6deg)",
                    },
                }
            },
            animation: {
                float: "float 4s ease-in-out infinite",
            },
        },
    }
}