import { BooksResults } from '../Books/Books';
import logo from '../../assets/logo.png';
import SearchBar from '../SearchBar/SearchBar';

import styles from './styles.module.scss';

interface HeaderProps {
  books: BooksResults;
  handlers: {
    setBooks: React.Dispatch<React.SetStateAction<BooksResults>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

function Header({ books, handlers }: HeaderProps) {
  return (
    <>
      <div
        className={
          !(books.totalItems > 0)
            ? styles.content
            : `${styles.content} ${styles.top}`
        }
      >
        <div
          className={
            !(books.totalItems > 0)
              ? styles.logoContainer
              : `${styles.logoContainer} ${styles.found}`
          }
        >
          <img className={styles.logo} src={logo} alt="Google Books Logo"></img>
        </div>
        <SearchBar handlers={handlers}>{}</SearchBar>
      </div>
    </>
  );
}

export default Header;
