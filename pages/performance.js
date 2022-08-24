import styles from "../styles/Home.module.css"
import grmasques6 from "../assets/Groupe de masques 6.svg"
import Image from "next/image"

export default function Performance() {
  return (
    <div className={styles.page}>
      <Image alt="grmasques6" src={grmasques6} />
      Performance
    </div>
  )
}
