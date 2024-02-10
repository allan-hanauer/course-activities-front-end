import dioLogo from "../assets/logo.png";

import { navLinks } from "../constants/index";
import "./Header.css";
console.log(navLinks[1].title);
const Header = () => {
  return (
    <header>
      <img src={dioLogo} alt="dio-logo" width="120px" />
      <nav>
        <ul>
          {navLinks.map((value, index) => (
            <li key={index}>
              <a href={`#${value.id}`}>{value.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
