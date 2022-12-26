import { useCallback, useRef, useState } from 'react';
import './App.css';
import { AboutUs } from './containers/AboutUs';
import { Banner } from './containers/Banner';
import { Technologies } from './containers/Technologies';

function App() {
  const [theme, setTheme] = useState<'default' | 'dark'>('default');
  const [purpleTheme, setPurpleTheme] = useState(false);

  const handleAddPurpleTheme = useCallback(() => {
    setPurpleTheme((prev) => !prev);
  }, []);

  const handleChangeTheme = useCallback(() => {
    theme === 'default' && setTheme('dark');
    theme === 'dark' && setTheme('default');
  }, [theme]);

  return (
    <div id="app" className={theme + (!!purpleTheme ? ' purple' : ' ')}>
      <Banner changeTheme={handleChangeTheme} />
      <AboutUs />
      <Technologies changeTheme={handleAddPurpleTheme} />
    </div>
  );
}

export default App;
