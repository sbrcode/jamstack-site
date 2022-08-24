import styles from "../styles/Home.module.css"

export default function ContactButton({ title }) {
  return (
    <div className={styles.calend}>
      <a
        href="https://calendly.com/pickbeam/prise-de-contact"
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
    </div>
  )
}
