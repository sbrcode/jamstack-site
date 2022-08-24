import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Home.module.css"
import Logo from "../assets/Logo.svg"
import { useState } from "react"
import { LINKSLIST } from "../constants/constants"
import ContactButton from "./contactButton"

export default function NavBar() {
  const [hovered, setHovered] = useState("")

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>
          <Image src={Logo} alt="Logo" width="180" height="64" />
        </a>
      </Link>
      <div className={styles.subHeader}>
        {LINKSLIST.length !== 0 &&
          LINKSLIST.map((link, linkId) => (
            <div key={linkId} onMouseOverCapture={() => setHovered(link.name)}>
              {link.name}
              {hovered === link.name && (
                <div
                  className={styles.tooltip}
                  onMouseOutCapture={() => setHovered("")}
                >
                  {Object.values(link.links).map((value, index) => (
                    <Link key={index} href={value.url}>
                      <div className={styles.links}>
                        {value.title}
                        <p>{value.subTitle}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
      <ContactButton title={"Nous Contacter"} />
    </nav>
  )
}
