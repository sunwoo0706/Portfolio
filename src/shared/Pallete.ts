type ColorToken = 'black' | 'white';

type ColorTheme = {
  scheme: Record<ColorToken, string>;
};

const pallete: Readonly<ColorTheme> = {
  scheme: {
    black: "#000",
    white: "#fff"
  },
};

export default pallete;