import React, { ReactNode } from "react";

interface HeaderProps {
  image: { src: string; alt: string };
  children: ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <img src={props.image.src} alt={props.image.alt} />
      {props.children}
    </header>
  );
};

export default Header;
