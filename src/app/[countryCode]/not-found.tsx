import styles from './page.module.scss';

export default async function NotFound() {
  return (
    <section className={styles.container}>
      <h1>404 Not Found</h1>
      <p>Country code does not exist.</p>
    </section>
  );
}
