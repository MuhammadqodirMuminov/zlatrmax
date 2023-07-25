import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo'
import { PhoneNav } from "../../config/constants"

const HeaderBody = ({ setTogglePhone, togglePhone }) => {
	return (
		<div className="header__body body-header">
			<div className="body-header__container">
				<Link to="/">
					<Logo />
				</Link>

				<div data-da=".catalog-header__container, 479.98" className="body-header__search">
					<form action="#" className="search-header">
						<button type="submit" className="search-header__button _icon-search"></button>
						<input type="text" name="form[]" autoComplete="off" data-error="Ошибка" placeholder="Поиск" className="search-header__input" />
					</form>
				</div>

				<div className="body-header__actions actions-header">
					<a href="#" className="actions-header__location _icon-location_navbar"><span>Москва</span></a>

					<div data-da=".top-header__container,991.98,first" className="action-header__phones phones-header">
						<div data-spollers className="phones-header__item">
							<Link to="tel:8-800-798-46-68" className="phones-header__phone"><span>8-800-798-46-68</span></Link>

							<button type="button" className="phones-header__arror" onClick={() => setTogglePhone(prev => !prev)}>
								<RiArrowDownSLine fontSize={"30px"} className={togglePhone && "tooglePhone"} />
							</button>

							{togglePhone && (
								<ul className="phones-header__list">
									{PhoneNav && (
										<li>
											<Link to="tel:8-800-798-46-68" className="phones-header__phone">8-800-798-46-78</Link>
										</li>
									)}
								</ul>
							)}

						</div>
						<button type="button" data-popup="#callback" className="phones-header__callback">
							Заказать звонок
						</button>
					</div>

					<a href="#" data-da=".top-header__container,991.98,2" className="actions-header__favorite _icon-heart"></a>

					<a href="#" data-da=".top-header__container,991.98,2" className="actions-header__cart cart-header">
						<div className="cart-header__icon _icon-cart"><span>0</span></div>
						<div className="cart-header__body">
							<div className="cart-header__summ">0 р.</div>
							<div className="cart-header__link">Оформить заказ</div>
						</div>
					</a>

				</div>
			</div>
		</div>
	)
}

export default HeaderBody