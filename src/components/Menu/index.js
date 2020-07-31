import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom'
import "./Menu.css";
import Button from "../Button";

function Menu({ to, title}) {
	return (
		<nav className="Menu">
			<Link to="/">
				<img className="Logo" src={Logo} alt="Logo" />
			</Link>
      <Button as={Link} className="ButtonLink" to={to}>
        {title}
      </Button>
		</nav>
	);
}

export default Menu;
