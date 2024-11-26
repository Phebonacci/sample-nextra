import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    foo: { bar: boolean };
    baz: boolean;
}

const Button = ({ children }: ButtonProps): JSX.Element => {
    return <button type="button">{children}</button>;
};

export default Button;
