import React from 'react'

const FooterItem = () => {
	return (
		<div className="body-footer__item item-footer">
			<div data-spollers="767.98" className="item-footer__spoller spoller-item-footer">
				<div className="spoller-item-footer__item">
					<button data-spoller className="spoller-item-footer__title" type="button">
						ИНФОРМАЦИЯ
					</button>
					<div className="spoller-item-footer__body">
						<nav className="menu-footer">
							<ul className="menu-footer__list">
								<li className="menu-footer__item">
									<a href="#" className="menu-footer__link">Златоустовские ножи в Москве и Московской области</a>
								</li>
								<li className="menu-footer__item">
									<a href="#" className="menu-footer__link">Ножевые стали</a>
								</li>
								<li className="menu-footer__item">
									<a href="#" className="menu-footer__link">О нас</a>
								</li>
								<li className="menu-footer__item">
									<a href="#" className="menu-footer__link">Условия оплаты и доставки</a>
								</li>
								<li className="menu-footer__item">
									<a href="#" className="menu-footer__link">Политика конфиденциальности</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FooterItem