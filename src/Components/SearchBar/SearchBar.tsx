import { ReactNode, useCallback, useState } from 'react';

import styles from './styles.module.scss';
import searchIcon from '../../assets/searchsvg.svg';
import Search from '../Buttons/Search/Search';
import { BooksResults } from '../Books/Books';

interface SearchBarProps {
  children: ReactNode;
  handlers: {
    setBooks: React.Dispatch<React.SetStateAction<BooksResults>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

function SearchBar({ children, handlers }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const searchHandler: React.ReactEventHandler<Element> = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        if (query.length === 0) {
          throw Error('Please provide a search query');
        }

        handlers.setLoaded(false);
        handlers.setLoading(true);

        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&printType=books`
        );

        const books = (await res.json()) as BooksResults;

        if (books) {
          handlers.setBooks(books);
        }

        handlers.setLoaded(true);
        handlers.setLoading(false);
      } catch (err: any) {
        console.error(err);
      }
    },
    [handlers, query]
  );

  return (
    <>
      <div className={styles.searchArea}>
        <div className={styles.searchbar}>
          <img src={searchIcon} alt=""></img>
          <input
            placeholder="Search Book"
            type="text"
            className={styles.textSearch}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                searchHandler(event);
              }
            }}
            onInput={(event) => setQuery(event.currentTarget?.value)}
          ></input>
          {children}
          <Search handler={searchHandler}></Search>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
