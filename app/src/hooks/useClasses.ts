import { useMemo } from 'react';
import { css } from '@emotion/css';
import { Theme, useTheme } from '@emotion/react';

const useClasses = (stylesElement: (arg0: Theme) => any) => {
  const theme = useTheme();
  return useMemo(() => {
    const rawClasses =
      typeof stylesElement === 'function'
        ? stylesElement(theme)
        : stylesElement;
    const prepared: any = {};

    Object.entries(rawClasses).forEach(([key, value = {}]) => {
      prepared[key] = css(value as any);
    });

    return prepared;
  }, [stylesElement, theme]);
};

export default useClasses;
