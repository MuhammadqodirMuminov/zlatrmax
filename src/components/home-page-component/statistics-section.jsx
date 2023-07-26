import React from 'react'

const StatisticsSection = () => {
	return (
		<>

			<section className="page__articles-module articles-module">
				<div className="articles-module__container">
					<h2 className="articles-module__title">Наши статьи</h2>
					<div className="articles-module__items">
						<article className="articles-module__item item-article">
							<a href="#" className="item-article__image-ibg">
								<picture>
									<img src="img/articles-module/01.jpg" alt="Картинка" />
								</picture>
							</a>
							<div className="item-article__body">
								<h4 className="item-article__title">
									<a href="#" className="item-article__link-title">
										Все о ножах: как правильно выбрать
									</a>
								</h4>
								<div className="item-article__data">24.07.2019</div>
							</div>
						</article>
						<article className="articles-module__item item-article">
							<a href="#" className="item-article__image-ibg">
								<picture>
									<img src="img/articles-module/02.jpg" alt="Картинка" />
								</picture>
							</a>
							<div className="item-article__body">
								<h4 className="item-article__title">
									<a href="#" className="item-article__link-title">
										Как правильно выбрать фонарь
									</a>
								</h4>
								<div className="item-article__data">24.07.2019</div>
							</div>
						</article>
						<article className="articles-module__item item-article">
							<a href="#" className="item-article__image-ibg">
								<picture>
									<img src="img/articles-module/03.jpg" alt="Картинка" /></picture>
							</a>
							<div className="item-article__body">
								<h4 className="item-article__title">
									<a href="#" className="item-article__link-title">
										Кухонные ножи для хозяек
									</a>
								</h4>
								<div className="item-article__data">24.07.2019</div>
							</div>
						</article>
						<article className="articles-module__item item-article">
							<a href="#" className="item-article__image-ibg">
								<picture>
									<img src="img/articles-module/04.jpg" alt="Картинка" /></picture>
							</a>
							<div className="item-article__body">
								<h4 className="item-article__title">
									<a href="#" className="item-article__link-title">
										Кухонные ножи для хозяек
									</a>
								</h4>
								<div className="item-article__data">24.07.2019</div>
							</div>
						</article>
					</div>
				</div>
			</section>

			<div className="page__products-block products-block">
				<div className="products-block__container">
					<div className="products-block__item product-block">
						<div className="product-block__body">
							<h4 className="product-block__title">
								<a href="#" className="product-block__link-title">Тактические фонари</a>
							</h4>
							<div className="product-block__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</div>
							<button type="button" className="product-block__button button">
								Подробнее
							</button>
						</div>
						<div className="product-block__image">
							<picture>
								<img src="img/products-block/01.jpg" alt="Картинка" />
							</picture>
						</div>
					</div>
					<div className="products-block__item product-block">
						<div className="product-block__body">
							<h4 className="product-block__title">
								<a href="#" className="product-block__link-title">Палобные мультифонари</a>
							</h4>
							<div className="product-block__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</div>
							<button type="button" className="product-block__button button">
								Подробнее
							</button>
						</div>
						<div className="product-block__image">
							<picture>
								<img src="img/products-block/02.jpg" alt="Картинка" />
							</picture>
						</div>
					</div>
				</div>
			</div>
		</>

	)
}

export default StatisticsSection