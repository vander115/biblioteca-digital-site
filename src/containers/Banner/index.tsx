import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { motion } from 'framer-motion';

import { Container } from './styles';
import logo from '../../assets/biblioteca-digital-logo.svg';
import { MutableRefObject, useCallback, useEffect, useState } from 'react';
import { AnimatedTitle } from '../../components/AnimatedTitle';

interface IBannerProps {
  changeTheme: () => void;
  bannerRef: MutableRefObject<null>;
  theme: string;
}

export function Banner({ changeTheme, bannerRef, theme }: IBannerProps) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    theme === 'default' && setChecked(false);
    theme === 'dark' && setChecked(true);
  };

  useEffect(() => {
    handleCheck();
  }, [theme]);

  return (
    <Container ref={bannerRef} id="inicio">
      <div className="show">
        <label className="switch">
          <input
            className="show"
            onClick={() => changeTheme()}
            type="checkbox"
            checked={checked}
          />
          <span className="slider round"></span>
        </label>
        <div className="icon">
          <MdDarkMode />
        </div>
      </div>

      <h1>
        <AnimatedTitle text="Biblioteca" />
        <br />
        <mark>
          <AnimatedTitle text="Digital" />
        </mark>
      </h1>
      <motion.div
        initial={{ opacity: 0, borderRadius: '1rem' }}
        animate={{ opacity: 1, borderRadius: '20rem' }}
        transition={{ duration: 1, delay: 1 }}
        className="logo"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          src={logo}
          alt=""
        />
      </motion.div>
      <h2>
        <AnimatedTitle text="EEEP Francisca Neilyta" />
      </h2>
    </Container>
  );
}
