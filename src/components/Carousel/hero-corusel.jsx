import React from 'react';
import Carousel from 'react-multi-carousel';

const HeroCorusel = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 1
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	return (
		<div className="main-block__swiper">

			<Carousel responsive={responsive}
				showDots={false}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={2000}>

				<div className="main-block__slide slide-main-block" >
					<div className="slide-main-block__content" >
						<h2 className="slide-main-block__title">
							Интернет магазин сертифицированных
						</h2>
						<div className="slide-main-block__sub-title">
							златоустовских ножей
						</div>
						<div className="slide-main-block__text">
							Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем
							магазине представлен наиболее широкий выбор
							Златоустовских ножей от Златоустовских Оружейных Фабрик
							и компаний, мы являемся официальными поставщиками.
						</div>
					</div>
					<a href="#" className="slide-main-block__button button">
						Подробнее
					</a>
				</div>

			</Carousel>


		</div>
	)
}

export default HeroCorusel