import React, { useState } from 'react'
import { FaUser } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { headerNav } from '../config/constants'

import { HeaderBody, HeaderFooter } from '../components'

const Header = () => {

	const [togglePhone, setTogglePhone] = useState(false)

	return (
		<header className="header">
			<div className="header__top top-header">
				<div className="top-header__container">
					<nav className="top-header__menu menu-top-header">
						<ul data-da=".menu__body,991.8" className="menu-top-header__list">
							<li className="menu-top-header__item menu-top-header__item_catalog"><a href="#" className="menu-top-header__link_catalog _icon-arrov">Каталог
								товаров</a>
							</li>
							{headerNav.map(item => (
								<li className="menu-top-header__item" key={item.route}>
									<Link to={item.route} className="menu-top-header__link">{item.label}</Link>
								</li>
							))}
						</ul>
					</nav>
					<Link to="/account" className="top-header__user">
						<FaUser />
						<span>Личный кабинет</span>
					</Link>
					<nav hidden className="menu">
						<button type="button" className="menu__icon icon-menu">
							<span></span>
						</button>
						<div className="menu__body"></div>
					</nav>
				</div>
			</div>

			<HeaderBody togglePhone={togglePhone} setTogglePhone={setTogglePhone} />

			<HeaderFooter />
		</header>
	)
}

export default Header;