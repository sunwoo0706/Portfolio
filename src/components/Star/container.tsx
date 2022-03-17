import { css, SerializedStyles } from '@emotion/react';

import pallete from 'shared/Pallete';
import { displayType } from 'shared/Type';

export interface StarElementProps {
  n: number;
  size: number;
  display: displayType;
}

export const generateStar = (
  n: number,
  display: displayType,
): SerializedStyles => {
  const color: string = pallete.scheme.white;

  const randomXY = (): string =>
    `${Math.floor(Math.random() * display?.width)}px ${Math.floor(
      Math.random() * display?.height,
    )}px ${color}`;

  const generateBoxShadowVal = (): string => {
    let boxShadow: string = '';

    for (let i = 0; i <= n; i++) {
      if (i === 0) {
        boxShadow += randomXY();
        continue;
      }
      boxShadow += `, ${randomXY()}`;
    }

    return boxShadow;
  };

  return css`
    box-shadow: ${generateBoxShadowVal()};
  `;
};
