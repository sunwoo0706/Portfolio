import { css, SerializedStyles } from '@emotion/react';

import pallete from 'shared/Pallete';
import { displayType } from 'shared/Type';

export interface StarElementProps {
  n: number;
  size: number;
  display: displayType;
}

/**
 * css의 box-shadow 속성을 이용해 배경에 쓰이는 별 생성기
 * @param n 별의 개수
 * @param display 현재 뷰포트의 크기
 */
export const generateStar = (
  n: number,
  display: displayType,
): SerializedStyles => {
  const color: string = pallete.scheme.white;

  /**
   * @returns 뷰포트 크기 안에서 랜덤한 별 좌표
   */
  const randomXY = (): string =>
    `${Math.floor(Math.random() * display?.width)}px ${Math.floor(
      Math.random() * display?.height,
    )}px ${color}`;

  /**
   * @returns 별 생성을 위한 `box-shadow` 문자열
   */
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
