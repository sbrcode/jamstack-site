import styles from "../styles/Home.module.css"
import grmasques5 from "../assets/Groupe de masques 5.svg"
import Image from "next/image"

export default function MaBoutiqueEnLigne() {
  return (
    <div className={styles.page}>
      <Image alt="grmasques5" src={grmasques5} />
      Ma Boutique En Ligne
    </div>
  )
}
