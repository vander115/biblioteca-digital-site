import { useEffect, useState } from 'react';
import { BsList } from 'react-icons/bs';
import { MdClose, MdDarkMode } from 'react-icons/md';
import { motion } from 'framer-motion';

import { Container } from './styles';

interface IPopUpProps {
  isVisible: boolean;
  changeTheme: () => void;
  theme: string;
}

export function PopUpMenu({ isVisible, changeTheme, theme }: IPopUpProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const linkData = [
    {
      name: 'Home',
      id: '#inicio',
    },
    {
      name: 'Serviços',
      id: '#servicos',
    },
    {
      name: 'Sobre Nós',
      id: '#sobre-nos',
    },
    {
      name: 'Tecnologias',
      id: '#tecnologias',
    },
    {
      name: 'Saiba Mais',
      id: '#saiba-mais',
    },
    {
      name: 'Devs',
      id: '#desenvolvedores',
    },
    {
      name: 'Telas',
      id: '#telas',
    },
  ];

  const handleCheck = () => {
    theme === 'default' && setChecked(false);
    theme === 'dark' && setChecked(true);
  };

  useEffect(() => {
    handleCheck();
  }, [theme]);

  return (
    <Container isOpen={isOpen} isVisible={isVisible}>
      {isOpen && (
        <>
          <div className="header">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: 0.5 }}
              className="show"
            >
              <label className="switch">
                <input
                  className="show"
                  onChange={() => changeTheme()}
                  type="checkbox"
                  checked={checked}
                />
                <span className="slider round"></span>
              </label>
              <div className="icon">
                <MdDarkMode />
              </div>
            </motion.div>
          </div>
          <nav>
            {linkData.map((link, index) => (
              <motion.a
                initial={{ opacity: 0, y: '-0.5rem' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                key={index}
                href={link.id}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
        </>
      )}
      <div className="footer">
        {isOpen && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Menu
          </motion.p>
        )}
        <div className="trigger" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <MdClose /> : <BsList />}
        </div>
      </div>
    </Container>
  );
}
