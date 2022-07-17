import styles from './styles.module.scss';
import notfound from '../../assets/notfound.png';

function NotFound() {
  return (
    <div className={styles.notFound}>
      <p className={styles.errorMsg}>{'No books were found'}</p>
      <div className={styles.imageWrapper}>
        <img src={notfound} alt="No Books Found"></img>
      </div>
    </div>
  );
}
export default NotFound;
