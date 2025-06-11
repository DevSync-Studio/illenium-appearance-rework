import { NuiStateProvider } from './hooks/nuiState';
import GlobalStyles from './styles/global';
import { modernTheme, Theme } from './styles/theme';

import Appearance from './components/Appearance';
import { ThemeProvider } from 'styled-components';
import Nui from './Nui';
import { useCallback, useEffect, useState } from 'react';

// Legacy theme interface for compatibility
interface LegacyTheme {
  id: string;
  borderRadius: string;
  fontColor: string;
  fontColorHover: string;
  fontColorSelected: string;
  fontFamily: string;
  primaryBackground: string;
  primaryBackgroundSelected: string;
  secondaryBackground: string;
  scaleOnHover: boolean;
  sectionFontWeight: string;
  smoothBackgroundTransition: boolean;
}

const defaultTheme: LegacyTheme = {
  id: 'default',
  borderRadius: '4px',
  fontColor: '255, 255, 255',
  fontColorHover: '255, 255, 255',
  fontColorSelected: '0, 0, 0',
  fontFamily: 'Inter',
  primaryBackground: '0, 0, 0',
  primaryBackgroundSelected: '255, 255, 255',
  secondaryBackground: '0, 0, 0',
  scaleOnHover: false,
  sectionFontWeight: 'normal',
  smoothBackgroundTransition: false,
};

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme | LegacyTheme>(modernTheme);

  const getCurrentTheme = (themeData: any) => {
    for (let index = 0; index < themeData.themes.length; index++) {
      if (themeData.themes[index].id === themeData.currentTheme) {
        return themeData.themes[index];
      }
    }
  };

  const loadTheme = useCallback(async () => {
    try {
      const themeData = await Nui.post('get_theme_configuration');
      setCurrentTheme(getCurrentTheme(themeData) || modernTheme);
    } catch (error) {
      setCurrentTheme(modernTheme);
    }
  }, []);

  useEffect(() => {
    loadTheme().catch(() => setCurrentTheme(modernTheme));
  }, [loadTheme]);

  return (
    <NuiStateProvider>
      <ThemeProvider theme={modernTheme}>
        <Appearance />
        <GlobalStyles />
      </ThemeProvider>
    </NuiStateProvider>
  );
};

export default App;
