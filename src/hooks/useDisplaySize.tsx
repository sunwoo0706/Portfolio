import { displayType } from 'shared/Type';

export const useDisplaySize = (): displayType => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};
