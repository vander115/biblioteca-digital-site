import { useCallback, useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import './App.css';
import { PopUpMenu } from './components/PopUpMenu';
import { AboutUs } from './containers/AboutUs';
import { Banner } from './containers/Banner';
import { Contributors } from './containers/Contributors';
import { Developers } from './containers/Developers';
import { KnowMore } from './containers/KnowMore';
import { Screens } from './containers/Screens';
import { Services } from './containers/Services';
import { Technologies } from './containers/Technologies';

function App() {
  const [theme, setTheme] = useState<'default' | 'dark'>('default');
  const [purpleTheme, setPurpleTheme] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean>();
  const bannerRef = useRef(null);
  const { inViewport } = useInViewport(bannerRef);

  const handleAddPurpleTheme = useCallback((value: boolean) => {
    value ? setPurpleTheme(true) : setPurpleTheme(false);
  }, []);

  const handleChangeTheme = useCallback(() => {
    theme === 'default' && setTheme('dark');
    theme === 'dark' && setTheme('default');
  }, [theme]);

  useEffect(() => {
    setIsVisible(inViewport);
  }, [inViewport]);

  return (
    <div id="app" className={theme + (!!purpleTheme ? ' purple' : ' ')}>
      <PopUpMenu
        changeTheme={handleChangeTheme}
        theme={theme}
        isVisible={!isVisible}
      />
      <Banner
        bannerRef={bannerRef}
        changeTheme={handleChangeTheme}
        theme={theme}
      />
      <Services />
      <AboutUs />
      <Technologies />
      <KnowMore />
      <Developers changeTheme={handleAddPurpleTheme} />
      <Screens />
      <Contributors />
    </div>
  );
}

export default App;
