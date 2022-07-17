import styles from './styles.module.scss';
import book_placeholder from '../../../assets/book_placeholder.jpg';
import { BookResult } from './types';

interface BookProps {
  book: BookResult;
}

function Book({ book }: BookProps) {
  const book_image =
    book?.volumeInfo.imageLinks?.thumbnail ||
    book?.volumeInfo.imageLinks?.smallThumbnail ||
    book_placeholder;

  const book_description = book.volumeInfo.description || 'No description';

  return (
    <>
      <div className={styles.book}>
        <div className={styles.bookWrapper}>
          <img src={book_image} alt=""></img>
        </div>

        <div className={styles.information}>
          <h2>{book?.volumeInfo.title}</h2>
          <p className={styles.description}>{book_description}</p>
        </div>
      </div>
    </>
  );
}

export default Book;
