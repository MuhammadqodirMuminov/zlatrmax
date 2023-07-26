import React, { useState } from 'react'
import { BsHeart } from "react-icons/bs"
import { FaUser } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { HeaderBody, HeaderFooter } from '../components'
import { headerNav } from '../config/constants'

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
						<FaUser className='mobile__active-icon' />
						<span>Личный кабинет</span>
					</Link>

					<a href="#" data-da=".top-header__container,991.98,2" className="actions-header__cart cart-header mobile__active">
						<div className="cart-header__icon _icon-cart"><span>0</span></div>
						<div className="cart-header__body">
							<div className="cart-header__summ">0</div>
						</div>
					</a>

					<Link to="/account" className="mobile__active">
						<BsHeart className='mobile__active-icon' />
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