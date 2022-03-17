type ColorToken = 'black' | 'white' | 'yellow' | 'mint';

type ColorTheme = {
  scheme: Record<ColorToken, string>;
};

const pallete: Readonly<ColorTheme> = {
  scheme: {
    black: "#000",
    white: "#fff",
    yellow: "#ffd54e",
    mint: "#4bd5ee"
  },
};

export default pallete;