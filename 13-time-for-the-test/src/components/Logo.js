import LOGO_IMG from "../../assets/img/logo.png"
import { Link } from "react-router-dom"

const Logo = ({ name, email }) => {
  /* Example of Props Driling */
  // console.log("Logo: ", name)
  return (
    <Link to="#">
      <img data-testid="logo" className="w-20" src={LOGO_IMG} alt="LOGO Image" />
      {/* {name + " " + email} */}
    </Link>
  )
}

export default Logo
