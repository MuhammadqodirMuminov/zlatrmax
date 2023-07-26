import React from 'react';
import Carousel from 'react-multi-carousel';
import { coruselData } from '../../config/constants';
import SellSectionCard from '../card/sell-section-card';

const SellSection = () => {

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 1500 },
			items: 4
		},
		desktop: {
			breakpoint: { max: 1500, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 900, min: 600 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 600, min: 0 },
			items: 1
		}
	};

	return (
		<section className="page__hits-products hits-products">
			<div className="products-slider">
				<div className="products-slider__container">
					<div className="products-slider__header">
						<h2 className="products-slider__title">Хиты продаж</h2>
						<a href="#" className="products-slider__more">Перейти в каталог</a>
					</div>
					<div className="products-slider__slider">
						<div className="products-slider__swiper">
							<Carousel responsive={responsive}
								showDots={true}
								arrows={true}
								infinite={true}
								autoPlay={true}
								autoPlaySpeed={2000} >
								{coruselData.map(item => (
									<SellSectionCard card={item} key={item.id}/>
								))}
							</Carousel>

						</div>
					</div>
				</div>
			</div>

		</section>
	)
}

export default SellSection