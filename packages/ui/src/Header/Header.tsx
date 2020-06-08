import React from 'react';

interface HeaderProps {
  a: string;
  children?: React.ReactNode;
}

export const Header: React.SFC<HeaderProps> = ({ children }: HeaderProps) => {
  return <h2>{children}</h2>;
};

export default Header;
