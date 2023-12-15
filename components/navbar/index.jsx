"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { useOutside } from "../../utils/useOutside";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div>
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="./main.png" alt="Logo" width="60" height="60" />
        </Link>
      </div>
    </div>
  );
};

const CustomLink = ({ children, href, external = false }) => {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return <Link href={href}>{children}</Link>;
};

const LinksBar = () => {
  return (
    <nav className={styles.links}>
      <CustomLink href="/about">About</CustomLink>

      <CustomLink href="/community">
        Community
      </CustomLink>
      <CustomLink href="/fq">FAQ</CustomLink>
      <SignedIn>
        <CustomLink href="/resource">Sources</CustomLink>
        <CustomLink href="/course">Course</CustomLink>
        <CustomLink href="/dashboard">Dashboard</CustomLink>
      </SignedIn>
    </nav>
  );
};

const ActionButtons = () => {
  return (
    <div className={styles.cta}>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </div>
  );
};

const DropdownMenu = () => {
  const elementRef = useRef();
  const buttonRef = useRef();
  const listRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = ({ onlyClose = false }) => {
    if (!onlyClose) {
      setMenuOpen(!menuOpen);
    } else {
      setMenuOpen(false);
    }
  };

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
  }, [menuOpen]);

  useOutside(elementRef, () => toggleMenu({ onlyClose: true }));

  return (
    <div ref={elementRef} className={styles.dropdown}>
      <div className="gap-4 flex">
        <div>
          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton />
          </SignedIn>
          <SignedOut>
            {/* Signed out users get sign in button */}
            <SignInButton />
          </SignedOut>
        </div>
        <div onClick={toggleMenu}>
          <button ref={buttonRef} className={styles.select}>
            Menu
          </button>
        </div>
      </div>
      <ul ref={listRef} className={styles.menu}>
        <li>
          <CustomLink href="/about">About</CustomLink>
        </li>
        <li>
          <CustomLink href="/resource">Features</CustomLink>
        </li>
        <li>
          <CustomLink href="https://t.me/+etavgioavwg4nthk" external>
            Community
          </CustomLink>
        </li>
        <li>
          <CustomLink href="/">FAQ</CustomLink>
        </li>
        <SignedIn>
          <li>
            <CustomLink href="/resource">Sources</CustomLink>
          </li>
          <li>
            <CustomLink href="/course">Course</CustomLink>
          </li>
          <li>
            <CustomLink href="/dashboard">Dashboard</CustomLink>
          </li>
        </SignedIn>
      </ul>
    </div>
  );
};

export const Navbar = () => {
  return (
    <header className={styles.container}>
      <Logo />
      <LinksBar />
      <ActionButtons />
      <DropdownMenu />
    </header>
  );
};
