import Link from "next/link"
import MasterCardSVG from "../components/svg/MasterCard.svg"
import VisaSVG from "../components/svg/Visa.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper"></div>
      <div className="footer__copyright">
        <div className="footer__copyright__payment">
          <MasterCardSVG />
          <VisaSVG />
        </div>
        <div className="footer__copyright__links">
          <Link href="https://www.shaodessa.com"><a>www.shaodessa.com</a></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
