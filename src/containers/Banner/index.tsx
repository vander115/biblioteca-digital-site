import { MdDarkMode, MdLightMode } from 'react-icons/md';

import { Container } from './styles';
import logo from '../../assets/biblioteca-digital-logo.svg';

interface IBannerProps {
  changeTheme: () => void;
}

export function Banner({ changeTheme }: IBannerProps) {
  return (
    <Container>
      <div className="show">
        <label className="switch">
          <input
            className="show"
            onChange={() => changeTheme()}
            type="checkbox"
          />
          <span className="slider round"></span>
        </label>
        <div className="icon">
          <MdDarkMode />
        </div>
      </div>

      <h1>
        Biblioteca <br /> <span className="orange">Digital</span>
      </h1>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h2>EEEP Francisca Neilyta</h2>
    </Container>
  );
}
