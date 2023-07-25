import React from 'react'
import { AiOutlineWhatsApp } from "react-icons/ai"
import { BsTelegram } from "react-icons/bs"
import { FaFacebook } from 'react-icons/fa'
import { SiViber } from "react-icons/si"
import { FooterNav } from '../config/constants'

const Footer = () => {
	return (
		<footer class="footer">
			<section class="footer-text text-footer">
				<div class="text-footer__container">
					<h1 class="text-footer__title">
						Златоустовские ножи интернет-магазин "ЗЛАТМАКС"
					</h1>
					<div class="text-footer__text">
						Наш интернет-магазин "ЗЛАТМАКС" предлагает Вам ножи очень высокого
						качества из города оружейников - Златоуста. Златоустовские ножи известны
						и популярны среди потребителей как на российским рынке, так и за
						рубежом: ножи охотничьи, хозяйственные, туристические, рыбацкие,
						складные и метательные. Нож Златоуста - это идеальный друг и товарищ в
						повседневной жизни и в экстремальных ситуациях. На многую продукцию
						распространяется гарантия до 10 лет - это один из главных показателей
						качества. Для Вас на нашем сайте "zlatmax" предложен огромный
						ассортимент Златоустовских ножей. Наши менеджеры помогут определиться и
						подобрать самый лучший Златоустовский нож, ориентируясь на Ваши
						пожелания.
					</div>
				</div>
			</section>

			<div class="footer__container">
				<div class="footer__body body-footer">
					<div class="body-footer__row">
						{FooterNav.map(item => (

							<div class="body-footer__item item-footer" key={item.id}>
								<div data-spollers="767.98" class="item-footer__spoller spoller-item-footer">
									<div class="spoller-item-footer__item">
										<button data-spoller class="spoller-item-footer__title" type="button">
											{item.title}
										</button>
										<div class="spoller-item-footer__body">
											<nav class="menu-footer">
												<ul class="menu-footer__list">
													{item.items.map(data => (
														<li class="menu-footer__item">
															<a href="#" class="menu-footer__link">{data.label}</a>
														</li>
													))}
												</ul>
											</nav>
										</div>
									</div>
								</div>
							</div>

						))}

					</div>
					<div class="body-footer__row">
						<div class="body-footer__item item-footer">
							<div data-spollers="767.98" class="item-footer__spoller spoller-item-footer">
								<div class="spoller-item-footer__item">
									<button data-spoller class="spoller-item-footer__title" type="button">
										КОНТАКТЫ
									</button>

									<div class="spoller-item-footer__body">
										<nav class="menu-footer">
											<ul class="menu-footer__list">
												<li i class="menu-footer__item">
													<a href="tel:88007774967" class="menu-footer__link _icon-footer-phone">8 (800) 777-49-67</a>
												</li>
												<li class="menu-footer__item _icon-footer-clock">
													<div>
														<p>Пн-Пт</p>
														<p>7:00 - 16:00 (МСК)</p>
													</div>
												</li>
												<li class="menu-footer__item _icon-footer-location">
													<div>
														<p>Златоуст,</p>
														<p>ул. Шоссейная,</p>
														<p>д. 1, офис «6Б»</p>
													</div>
												</li>
												<li class="menu-footer__item">
													<a href="mailto:info@zlatmax.ru" class="menu-footer__link _icon-footer-mail">info@zlatmax.ru</a>
												</li>
											</ul>
										</nav>

										<ul class="social-footer">
											<li class="social-footer__item">
												<a href="#" class="social-footer__link">
													<FaFacebook color='blue' fontSize={"28px"} />
												</a>
											</li>
											<li class="social-footer__item">
												<a href="#" class="social-footer__link">
													<SiViber color='green' fontSize={"28px"} />
												</a>
											</li>
											<li class="social-footer__item">
												<a href="#" class="social-footer__link">
													<BsTelegram color='#0088cc' fontSize={"28px"} />
												</a>
											</li>
											<li class="social-footer__item">
												<a href="#" class="social-footer__link">
													<AiOutlineWhatsApp color='green' fontSize={"28px"} />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="body-footer__item item-footer">
							<div data-spollers="767.98" class="item-footer__spoller spoller-item-footer">
								<div class="spoller-item-footer__item">
									<button data-spoller class="spoller-item-footer__title" type="button">
										ПОЛЕЗНЫЕ ССЫЛКИ
									</button>
									<div class="spoller-item-footer__body">
										<nav class="menu-footer">
											<ul class="menu-footer__list">
												<li class="menu-footer__item">
													<a href="#" class="menu-footer__link">Способы оплаты и доставки</a>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
						<div class="body-footer__item item-footer">
							<div data-spollers="767.98" class="item-footer__spoller spoller-item-footer">
								<div class="spoller-item-footer__item">
									<button data-spoller class="spoller-item-footer__title" type="button">
										НАША ГАРАНТИЯ
									</button>
									<div class="spoller-item-footer__body">
										<div class="spoller-item-footer__text">
											Недовольны своей покупкой? Вы можете вернуть ее в течении 30
											дней с даты получения, согласно <a href="#">нашим правилам</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="body-footer__item item-footer">
							<div data-spollers="767.98" class="item-footer__spoller spoller-item-footer">
								<div class="spoller-item-footer__item">
									<button data-spoller class="spoller-item-footer__title" type="button">
										НОВОСТНАЯ РАССЫЛКА
									</button>
									<form action="#" class="spoller-item-footer__body footer-subscribe">
										<label for="subscribe-input" class="footer-subscribe__label">Подпишитесь прямо сейчас!</label>
										<div class="footer-subscribe__line">
											<input id="subscribe-input" autocomplete="off" type="text" data-error="Ошибка" name="form[]" data-required="email" placeholder="example@gmail.com" class="footer-subscribe__input" />
											<button class="footer-subscribe__button _icon-arrov" type="submit"></button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div class="body-footer__bottom">
						<div class="body-footer__rules">
							Все материалы, размещенные на сайте, носят справочный характер и не
							являются публичной офертой, определяемойположениями Статьи 437
							Гражданского кодекса Российской Федерации. При копировании материалов
							гиперссылка на www.zlatmax.ru обязательна!
						</div>
						<div class="body-footer__copy">
							Златоустовские ножи <span>www.zlatmax.ru ©</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer