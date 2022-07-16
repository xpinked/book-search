import { ReactEventHandler } from 'react';
import Button from '../Button/Button';

import styles from './styles.module.scss';

interface SearchProps {
  handler: ReactEventHandler;
}

function Search({ handler }: SearchProps) {
  return (
    <Button className={styles.search} handler={handler}>
      {'Search'}
    </Button>
  );
}

export default Search;
