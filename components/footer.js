import styles from "../styles/Home.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/sbrcode/jamstack-site"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <span className={styles.logo}>sbrcode</span>
      </a>
    </footer>
  )
}
