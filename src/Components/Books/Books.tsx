import { ReactNode } from 'react';
import Book from './Book/Book';

import styles from './styles.module.scss';
import './styles.module.scss';
import { BookResult } from './Book/types';

export interface BooksResults {
  kind: string;
  totalItems: number;
  items: BookResult[];
}

interface BooksProps {
  children: ReactNode;
  books: BooksResults;
}

function Books({ children, books }: BooksProps) {
  return (
    <div className={`${styles.books} scrollbar`}>
      {books.items?.slice(0, 10).map((book) => (
        <div className={styles.bookWrapper} key={book?.id}>
          <Book book={book}></Book>
        </div>
      ))}

      {children}
    </div>
  );
}

export default Books;
