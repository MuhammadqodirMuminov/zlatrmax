import React from 'react'
import { caregorySectionData } from '../../config/constants'

const CategorySection = () => {
	return (
		<>
			<section className="page__main-text-content main-text-content">
				<div className="main-text-content__container">
					<h1 className="main-text-content__title">
						Златоустовские ножи интернет-магазин "ЗЛАТМАКС"
					</h1>
					<div className="main-text-content__text">
						Наш интернет-магазин "ЗЛАТМАКС" предлагает Вам ножи очень высокого
						качества из города оружейников - Златоуста. Златоустовские ножи
						известны и популярны среди потребителей как на российским рынке,
						так и за рубежом: ножи охотничьи, хозяйственные, туристические,
						рыбацкие, складные и метательные. Нож Златоуста - это идеальный
						друг и товарищ в повседневной жизни и в экстремальных ситуациях.
						На многую продукцию распространяется гарантия до 10 лет - это один
						из главных показателей качества. Для Вас на нашем сайте "zlatmax"
						предложен огромный ассортимент Златоустовских ножей. Наши
						менеджеры помогут определиться и подобрать самый лучший
						Златоустовский нож, ориентируясь на Ваши пожелания.
					</div>
				</div>
			</section>

			<section className="page__catalog-cards catalog-cards">
				<div className="catalog-cards__container">

					{caregorySectionData.map(item => (
						<div className="catalog-cards__item item-catalog-cards" key={item.id}>
							<div className="item-catalog-cards__body">
								<h3 className="item-catalog-cards__title">
									<a href="#" className="item-catalog-cards__link-title">{item.title}</a>
								</h3>
								<ul className="item-catalog-cards__list">
									<li className="item-catalog-cards__item">
										<a href="#" className="item-catalog-cards__link">{item.item1}</a>
									</li>
									<li className="item-catalog-cards__item">
										<a href="#" className="item-catalog-cards__link">{item.item2}</a>
									</li>
									<li className="item-catalog-cards__item">
										<a href="#" className="item-catalog-cards__link">{item.item3}</a>
									</li>
								</ul>
							</div>
							<div className="item-catalog-cards__image">
								<picture>
									<img src={item.image} alt="Картинка" /></picture>
							</div>
						</div>
					))}

				</div>
			</section>
		</>
	)
}

export default CategorySection