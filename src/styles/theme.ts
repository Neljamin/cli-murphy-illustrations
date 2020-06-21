const colors = {
	white: "#ffffff",
	black: "#000000",
	darkGrey: "#333333",
	lightGrey: "#DDDDDD",
	red: "#ff626e",
	darkRed: "#8A0000",
	darkOrange: "#ff7e4c",
	orange: "#FFDAC1",
	yellow: "#FFFFD1",
	lightGreen: "#E2F0CB",
	green: "#B5EAD7",
	darkGreen: "#77bb36",
    blue: "#4db7ff",
    purple: '#EAD2FE'
};

const applyAlpha: (color: string, alpha: string) => string = (color, alpha) => `${color}${alpha}`;

const theme = {
    banner: {
        background: colors.purple
    },
    links: {
        About: {
            color: colors.red,
            hoverBackground: applyAlpha(colors.red, '33'),
        },
        Books: {
            color: colors.blue,
            hoverBackground: applyAlpha(colors.blue, '33'),
        },
        Illustrations: {
            color: colors.darkGreen,
            hoverBackground: applyAlpha(colors.darkGreen, '33'),
        },
        Contact: {
            color: colors.darkOrange,
            hoverBackground: applyAlpha(colors.darkOrange, '33'),
        }
    },
};

export default theme;