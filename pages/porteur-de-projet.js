import styles from "../styles/Home.module.css"
import grmasques3 from "../assets/Groupe de masques 3.svg"
import Image from "next/image"

export default function PorteurDeProjet() {
  return (
    <div className={styles.page}>
      <Image alt="grmasques3" src={grmasques3} />
      Porteur De Projet
    </div>
  )
}
