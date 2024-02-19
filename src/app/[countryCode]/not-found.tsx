import styles from './page.module.scss';

export default async function NotFound() {
  return (
    <section className={styles.container}>
      <p>
        <b>404 Not Found</b> Country code does not exist.{' '}
      </p>
    </section>
  );
}
