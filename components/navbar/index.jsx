import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { useOutside } from "../../utils/useOutside"

const Logo = () => {
  return(
    <div className={styles.logo}>
      <div>
        <Link href="/">
          <a>
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img src="./main.png" alt="Logo" width="60" height="60" />
          </a>
        </Link>
      </div>
    </div>
  )
}

const LinkElement = ({ title, src, external = false}) => {
  if (external) {
    return(
      <a href={src} target="_blank" rel="noreferrer"> 
        {title}<i className="ri-external-link-line" />
      </a>
    )
  }

  return(
    <Link href={src}>
      <a>{title}</a>
    </Link>
  )

}

const LinksBar = () => {
  return(
    <nav className={styles.links}>
      <LinkElement title="About" src="/resource" />
      <LinkElement title="Sources" src="/resource" />
      <LinkElement title="Community" src="https://discord.gg/ZXEPNJrn" external />
      <LinkElement title="FAQ" src="/" />
    </nav>
  )
}

const ActionButtons = () => { 
  return(
    <div className={styles.cta}>
      <button>SignUp</button>
    </div>
  )
}

const DropdownMenu = () => {
  const elementRef = useRef();
  const buttonRef = useRef();
  const listRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = ({onlyClose = false}) => {
    if (!onlyClose) {
      setMenuOpen(!menuOpen);
    } else {
      setMenuOpen(false);
    }

  }

  useEffect(() => {
    const buttonNode = buttonRef.current;
    const listNode = listRef.current;

    if (menuOpen) {
      buttonNode.classList.add(styles.active_select);
      listNode.classList.add(styles.menu_open);
    } else {
      buttonNode.classList.remove(styles.active_select);
      listNode.classList.remove(styles.menu_open);
    }
  }, [menuOpen])

  useOutside(elementRef, () => toggleMenu({onlyClose: true}));

  return(
    <div ref={elementRef} className={styles.dropdown}>
      <div onClick={toggleMenu}>
        <button ref={buttonRef} className={styles.select}>Menu</button>
      </div>
      <ul ref={listRef} className={styles.menu}>
        <li>
          <LinkElement title="About" src="/resource" />
        </li>
        <li>
          <LinkElement title="Features" src="/resource" />
        </li>
        <li>
          <LinkElement title="Community" src="https://t.me/+etavgioavwg4nthk" external />
        </li>
        <li>
          <LinkElement title="FAQ" src="/" />
        </li>
      </ul>
    </div>
  )
}

export const Navbar = () => {
  return(
      <header className={styles.container}>
        <Logo />
        <LinksBar />
        <ActionButtons />
        <DropdownMenu />
      </header>
  )
};
