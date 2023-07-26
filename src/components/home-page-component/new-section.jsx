import React from 'react';
import Carousel from 'react-multi-carousel';
import { coruselData } from '../../config/constants';
import SellSectionCard from '../card/sell-section-card';

const NewSection = () => {

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 1500 },
			items: 3
		},
		desktop: {
			breakpoint: { max: 1500, min: 1024 },
			items: 2
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
		<section className="page__new-products new-products" style={{
			backgroundImage: "url(../../../img/new-product/bg.jpg)",
			backgroundRepeat: "no-repeat",
			backgroundAttachment: "inherit",
			backgroundPosition: "bottom",
			backgroundSize: "cover"
		}}>
			<div className="products-new">
				<div className="products-new__inner">
					<div className="products-new__container">
						<div className="products-new__body">
							<h2 className="products-new__title">Новинки</h2>
							<div className="products-new__text">
								Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине
								представлен наиболее широкий выбор Златоустовских ножей от
								Златоустовских Оружейных Фабрик и компаний, мы являемся официальными
								поставщиками.
							</div>
							<a href="#" className="products-new__link link-arrow _icon-arrov"><span>Больше новинок</span></a>
						</div>
						<div className="products-new__content">
							<div className="products-new__slider">
								<div className="products-new__swiper">

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
				</div>
			</div>

		</section>
	)
}

export default NewSection