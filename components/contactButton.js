import styles from "../styles/Home.module.css"

export default function ContactButton({ title }) {
  return (
    <div className={styles.calend}>
      <a href="https://calendly.com/login" target="_blank" rel="noreferrer">
        {title}
      </a>
    </div>
  )
}
