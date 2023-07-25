import React from 'react'

const FooterItem = () => {
	return (
		<div class="body-footer__item item-footer">
			<div data-spollers="767.98" class="item-footer__spoller spoller-item-footer">
				<div class="spoller-item-footer__item">
					<button data-spoller class="spoller-item-footer__title" type="button">
						ИНФОРМАЦИЯ
					</button>
					<div class="spoller-item-footer__body">
						<nav class="menu-footer">
							<ul class="menu-footer__list">
								<li class="menu-footer__item">
									<a href="#" class="menu-footer__link">Златоустовские ножи в Москве и Московской области</a>
								</li>
								<li class="menu-footer__item">
									<a href="#" class="menu-footer__link">Ножевые стали</a>
								</li>
								<li class="menu-footer__item">
									<a href="#" class="menu-footer__link">О нас</a>
								</li>
								<li class="menu-footer__item">
									<a href="#" class="menu-footer__link">Условия оплаты и доставки</a>
								</li>
								<li class="menu-footer__item">
									<a href="#" class="menu-footer__link">Политика конфиденциальности</a>
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