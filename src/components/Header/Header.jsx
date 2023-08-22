import { Container } from "../Containers";
import { Logo } from "../Logo";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Logo />
      </Container>
    </header>
  );
}

export default Header;
