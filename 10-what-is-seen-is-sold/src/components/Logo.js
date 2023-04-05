import LOGO_IMG from "../../assets/img/logo.png"
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to="#">
      <img className="w-20" src={LOGO_IMG} alt="LOGO Image" />
    </Link>
  )
}

export default Logo
