import React from 'react';
import logo from '../../assets/img/logo-github.png';
import './style.css';

interface HeaderProps {
  currentTime: string;
  language: string;
  changeLanguage: (language: string) => void;
}

class Header extends React.Component<HeaderProps> {
  render() {
    const { currentTime, language, changeLanguage } = this.props;

    return (
      <div className="header">
        <a
          href="https://github.com/devev-m/reviews-app"
          target="_blanck"
        >
          <img
            className="logo"
            src={logo}
            alt="Logo"
          />
        </a>

        <select onChange={(e) => changeLanguage(e.target.value)}>
          <option value="RU">RU</option>
          <option value="EN">EN</option>
        </select>

        <div>{language}</div>
        <div className="time">{currentTime}</div>
      </div>
    );
  }
}

export default Header;
