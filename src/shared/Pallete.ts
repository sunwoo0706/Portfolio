type ColorToken = 'black';

type ColorTheme = {
  scheme: Record<ColorToken, string>;
};

const pallete: Readonly<ColorTheme> = {
  scheme: {
    black: "#000"
  },
};

export default pallete;