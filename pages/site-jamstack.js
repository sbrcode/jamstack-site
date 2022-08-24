import styles from "../styles/Home.module.css"
import noun from "../assets/noun-website-4860917.svg"
import Image from "next/image"

export default function SiteJamstack() {
  return (
    <div className={styles.page}>
      <Image alt="noun" src={noun} />
      Site Jamstack
    </div>
  )
}
