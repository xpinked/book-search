import { useState } from 'react';

import styles from './styles.module.scss';

import Books, { BooksResults } from '../../Components/Books';
import Header from '../../Components/Header';
import Spinner from '../../Components/Spinner';

function Main() {
  const [books, setBooks] = useState({} as BooksResults);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handlers = {
    setBooks,
    setLoading,
    setLoaded,
  };

  return (
    <>
      <div
        className={
          !loading ? `${styles.main}` : `${styles.main} ${styles.foundBooks}`
        }
      >
        <Header handlers={handlers} books={books}></Header>
        {loading && <Spinner></Spinner>}
        {loaded && books?.totalItems <= 0 && <h1>{`No Books Found`}</h1>}
        {loaded && !loading && books?.totalItems > 0 && (
          <Books books={books}>{}</Books>
        )}
      </div>
    </>
  );
}

export default Main;
