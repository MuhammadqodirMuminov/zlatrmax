import React from 'react'
import HeroCorusel from '../Carousel/hero-corusel'

const HeroSection = () => {
	return (
		<section className="page__main-block main-block" style={{ backgroundColor: "#000" }}>
			<div className="main-block__container">
				<div className="main-block__body">

					<HeroCorusel />

					<div className=" media-main-block">
						<div className="media-main-block__body">

							<img style={{ maxWidth: "400px", width: "100%" }} src="img/main-block/image.png" alt="" />

							<div className="media-main-block__tips">
								<div data-tippy-content="Подсказка" className="media-main-block__tip media-main-block__tip_1">
									<span>+</span>
								</div>
								<div data-tippy-content="Подсказка" className="media-main-block__tip media-main-block__tip_2">
									<span>+</span>
								</div>
								<div data-tippy-content="Подсказка" className="media-main-block__tip media-main-block__tip_3">
									<span>+</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="main-block__advantages advantages-main">
					<div className="advantages-main__item">
						<div className="advantages-main__icon">
							<img src="img/main-block/icons/01.svg" alt="icon" />
						</div>
						<div className="advantages-main__text">
							Гарантия 100% возврата денежных средств
						</div>
					</div>
					<div className="advantages-main__item">
						<div className="advantages-main__icon">
							<img src="img/main-block/icons/02.svg" alt="icon" />
						</div>
						<div className="advantages-main__text">
							Доставка по России, Казахстану и Белоруссии
						</div>
					</div>
					<div className="advantages-main__item">
						<div className="advantages-main__icon">
							<img src="img/main-block/icons/03.svg" alt="icon" />
						</div>
						<div className="advantages-main__text">
							Возможность оформление заказа без регистрации.
						</div>
					</div>
					<div className="advantages-main__item">
						<div className="advantages-main__icon">
							<img src="img/main-block/icons/04.svg" alt="icon" />
						</div>
						<div className="advantages-main__text">
							Скидки постоянным покупателям.
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection