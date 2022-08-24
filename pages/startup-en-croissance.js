import styles from "../styles/Home.module.css"
import grmasques4 from "../assets/Groupe de masques 4.svg"
import Image from "next/image"

export default function StartupEnCroissance() {
  return (
    <div className={styles.page}>
      <Image alt="grmasques4" src={grmasques4} />
      Startup En Croissance
    </div>
  )
}
