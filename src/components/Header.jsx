import Logo from "./Logo";

import Container from "./Container";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Container>
        <Logo />
      </Container>
    </header>
  );
}

export default Header;
