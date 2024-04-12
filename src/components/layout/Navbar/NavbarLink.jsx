import { Link, useMatch } from "react-router-dom";
import NavbarButton from "./NavbarButton";

function NavbarLink({ href, ...props }) {
  let match = useMatch({ path: href, end: false });

  return <NavbarButton as={Link} to={href} isActive={match} {...props} />;
}

export default NavbarLink;
