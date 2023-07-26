import React from 'react'

const SellSectionCard = ({ card }) => {
	return (
		<div className="products-slider__slide" style={{ marginBottom: "40px" }}>
			<article className="product-card">
				<a href="#" className="product-card__image">
					<span className="product-card__item-image-ibg product-card__item-image-ibg_contain">
						<picture>
							<img src={card.image} alt="Картинка" />
						</picture>
					</span>
				</a>
				<div className="product-card__body">
					<h4 className="product-card__title">
						<a href="#" className="product-card__link-title">{card.title}</a>
					</h4>
					<div className="product-card__info info-product-card">
						<div className="info-product-card__size">{card.razmer}</div>
						<div className="info-product-card__materials">{card.material}</div>
					</div>
					<div className="product-card__rating  rating rating-set">
						<div className="rating__body">
							<div className="rating__active"></div>
							<div className="rating__items">
								<input type="radio" className="rating__item" value="1" name="rating" />
								<input type="radio" className="rating__item" value="2" name="rating" />
								<input type="radio" className="rating__item" value="3" name="rating" />
								<input type="radio" className="rating__item" value="4" name="rating" />
								<input type="radio" className="rating__item" value="5" name="rating" />
							</div>
						</div>
						<div className="rating__value">{card.rating}</div>
						<div className="rating__info">{card.otzif}</div>
					</div>
					<div className="product-card__footer">
						<div className="product-card__price">2 719 р.</div>
						<a href="#" className="product-card__compare _icon-compare"></a>
						<a href="#" className="product-card__favorite _icon-heart"></a>
					</div>
					<button className="product-card__cart button" type="button">
						<span className="_icon-cart">В корзину</span>
					</button>
				</div>
			</article>
		</div>
	)
}

export default SellSectionCard