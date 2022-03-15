type ColorToken = 'black' | 'white' | 'yellow';

type ColorTheme = {
  scheme: Record<ColorToken, string>;
};

const pallete: Readonly<ColorTheme> = {
  scheme: {
    black: "#000",
    white: "#fff",
    yellow: "#ffd54e"
  },
};

export default pallete;