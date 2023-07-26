import React from 'react'
import { AiOutlineWhatsApp } from "react-icons/ai"
import { BsTelegram } from "react-icons/bs"
import { FaFacebook } from 'react-icons/fa'
import { SiViber } from "react-icons/si"
import { FooterNav } from '../config/constants'

const Footer = () => {
	return (
		<footer className="footer">
			<section className="footer-text text-footer">
				<div className="text-footer__container">
					<h1 className="text-footer__title">
						Златоустовские ножи интернет-магазин "ЗЛАТМАКС"
					</h1>
					<div className="text-footer__text">
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

			<div className="footer__container">
				<div className="footer__body body-footer">
					<div className="body-footer__row">
						{FooterNav.map(item => (

							<div className="body-footer__item item-footer" key={item.id}>
								<div data-spollers="767.98" className="item-footer__spoller spoller-item-footer">
									<div className="spoller-item-footer__item">
										<button data-spoller className="spoller-item-footer__title" type="button">
											{item.title}
										</button>
										<div className="spoller-item-footer__body">
											<nav className="menu-footer">
												<ul className="menu-footer__list">
													{item.items.map((data, i) => (
														<li className="menu-footer__item" key={i}>
															<a href="#" className="menu-footer__link">{data.label}</a>
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
					<div className="body-footer__row">
						<div className="body-footer__item item-footer">
							<div data-spollers="767.98" className="item-footer__spoller spoller-item-footer">
								<div className="spoller-item-footer__item">
									<button data-spoller className="spoller-item-footer__title" type="button">
										КОНТАКТЫ
									</button>

									<div className="spoller-item-footer__body">
										<nav className="menu-footer">
											<ul className="menu-footer__list">
												<li i className="menu-footer__item">
													<a href="tel:88007774967" className="menu-footer__link _icon-footer-phone">8 (800) 777-49-67</a>
												</li>
												<li className="menu-footer__item _icon-footer-clock">
													<div>
														<p>Пн-Пт</p>
														<p>7:00 - 16:00 (МСК)</p>
													</div>
												</li>
												<li className="menu-footer__item _icon-footer-location">
													<div>
														<p>Златоуст,</p>
														<p>ул. Шоссейная,</p>
														<p>д. 1, офис «6Б»</p>
													</div>
												</li>
												<li className="menu-footer__item">
													<a href="mailto:info@zlatmax.ru" className="menu-footer__link _icon-footer-mail">info@zlatmax.ru</a>
												</li>
											</ul>
										</nav>

										<ul className="social-footer">
											<li className="social-footer__item">
												<a href="#" className="social-footer__link">
													<FaFacebook color='blue' fontSize={"28px"} />
												</a>
											</li>
											<li className="social-footer__item">
												<a href="#" className="social-footer__link">
													<SiViber color='green' fontSize={"28px"} />
												</a>
											</li>
											<li className="social-footer__item">
												<a href="#" className="social-footer__link">
													<BsTelegram color='#0088cc' fontSize={"28px"} />
												</a>
											</li>
											<li className="social-footer__item">
												<a href="#" className="social-footer__link">
													<AiOutlineWhatsApp color='green' fontSize={"28px"} />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="body-footer__item item-footer">
							<div data-spollers="767.98" className="item-footer__spoller spoller-item-footer">
								<div className="spoller-item-footer__item">
									<button data-spoller className="spoller-item-footer__title" type="button">
										ПОЛЕЗНЫЕ ССЫЛКИ
									</button>
									<div className="spoller-item-footer__body">
										<nav className="menu-footer">
											<ul className="menu-footer__list">
												<li className="menu-footer__item">
													<a href="#" className="menu-footer__link">Способы оплаты и доставки</a>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
						<div className="body-footer__item item-footer">
							<div data-spollers="767.98" className="item-footer__spoller spoller-item-footer">
								<div className="spoller-item-footer__item">
									<button data-spoller className="spoller-item-footer__title" type="button">
										НАША ГАРАНТИЯ
									</button>
									<div className="spoller-item-footer__body">
										<div className="spoller-item-footer__text">
											Недовольны своей покупкой? Вы можете вернуть ее в течении 30
											дней с даты получения, согласно <a href="#">нашим правилам</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="body-footer__item item-footer">
							<div data-spollers="767.98" className="item-footer__spoller spoller-item-footer">
								<div className="spoller-item-footer__item">
									<button data-spoller className="spoller-item-footer__title" type="button">
										НОВОСТНАЯ РАССЫЛКА
									</button>
									<form action="#" className="spoller-item-footer__body footer-subscribe">
										<label htmlFor="subscribe-input" className="footer-subscribe__label">Подпишитесь прямо сейчас!</label>
										<div className="footer-subscribe__line">
											<input id="subscribe-input" autoComplete="off" type="text" data-error="Ошибка" name="form[]" data-required="email" placeholder="example@gmail.com" className="footer-subscribe__input" />
											<button className="footer-subscribe__button _icon-arrov" type="submit"></button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="body-footer__bottom">
						<div className="body-footer__rules">
							Все материалы, размещенные на сайте, носят справочный характер и не
							являются публичной офертой, определяемойположениями Статьи 437
							Гражданского кодекса Российской Федерации. При копировании материалов
							гиперссылка на www.zlatmax.ru обязательна!
						</div>
						<div className="body-footer__copy">
							Златоустовские ножи <span>www.zlatmax.ru ©</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer