import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/MenuToggle.scss";

export default function MenuToogle({ setToggleMenu, toggleMenu }) {
	const handleToggleMenu = () => {
		if (toggleMenu === false) {
			setToggleMenu(true);
			localStorage.setItem("toogle", true);
			return;
		}

		setToggleMenu(false);
		localStorage.setItem("toogle", false);
	};
	return (
		<div className="menuToggle__container">
			<FontAwesomeIcon
				onClick={() => {
					handleToggleMenu();
				}}
				className="menuToggle__icon"
				icon={toggleMenu ? faBarsStaggered : faBars}
			/>
		</div>
	);
}
