const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'blue-x': '#0169A6',
                'blue-x-darker': '#014A78',
                'blue-x-dark': '#002E48',
            },
            gridTemplateColumns: {
                '16': 'repeat(16, minmax(0, 1fr))',
            },
            gridColumnEnd: {
                '13': '13',
                '14': '14',
                '15': '15',
                '16': '16',
                '17': '17',
            }
        },
    },
    variants: {
        display: ['responsive', 'hover', 'group-hover'],
    },
    plugins: [
        require('@tailwindcss/ui'),
    ],
    purge: {
        enabled: false,
        content: [
            './**/*.cshtml',
        ],
    },
}
