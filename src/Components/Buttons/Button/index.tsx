import { ReactEventHandler, ReactNode } from 'react';

import styles from './styles.module.scss';

interface ButtonProps {
  handler: ReactEventHandler;
  className: string;
  children: ReactNode;
}

function Button({ handler, className, children }: ButtonProps) {
  return (
    <button onClick={handler} className={`${className} ${styles.button}`}>
      {children}
    </button>
  );
}
export default Button;
export type { ButtonProps };
