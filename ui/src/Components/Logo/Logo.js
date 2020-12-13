import { ReactComponent as LogoImage } from './logo.svg';

import './Logo.scss';

export const Logo = () => (
  <div className="Logo">
    <LogoImage className="logo-image" />
    <span className="subtitle">Virginia Beach Rock</span>
  </div>
)
