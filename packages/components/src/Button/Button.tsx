import React from 'react';

interface ButtonProps {
  a: string;
  children?: React.ReactNode;
}

export const Button: React.SFC<ButtonProps> = ({ children }: ButtonProps) => <h2>{children}</h2>;

export default Button;
