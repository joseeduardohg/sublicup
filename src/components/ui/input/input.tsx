import React from 'react';
import './input.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`${className} input`}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
