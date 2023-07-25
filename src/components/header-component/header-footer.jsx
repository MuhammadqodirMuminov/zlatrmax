import React, { useEffect, useState } from 'react'
import { MainCatalog, NededKatalog } from '../../config/constants'

const HeaderFooter = () => {

	const [catalog, setSatalog] = useState({})
	const [catalogMenu, setCatelogMenu] = useState(true)

	useEffect(() => {
		setSatalog(NededKatalog)
	}, [])


	return (
		<div className="header__catalog catalog-header">
			<div className="catalog-header__container">
				<nav className="catalog-header__menu menu-catalog" >

					<ul className="menu-catalog__list">
						{MainCatalog.map(item => (
							<li className="menu-catalog__item" key={item.id} data-id={item.id} onClick={() => setCatelogMenu(prev => !prev)} >
								<button className="menu-catalog__link">
									{item.label}
								</button>
							</li>
						))}
					</ul>

					<div className="menu-catalog__sub-menu sub-menu-catalog">
						<button type="button" className="sub-menu-catalog__back _icon-back">Назад</button>
						<div className="sub-menu-catalog__container">

							<div hidden data-submenu="1" className={catalogMenu ? "sub-menu-catalog__active" : "sub-menu-catalog__block"} >
								<div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "20px" }}>
									{NededKatalog.mainTabs.map(item => (
										<div className="sub-menu-catalog__category" key={item.id}>
											<a href="#" className="sub-menu-catalog__link-category">{item.label}</a>
										</div>
									))}
								</div>

								<div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>

									<ul className="sub-menu-catalog__list">
										{NededKatalog.listOne.map(item => (
											<li className="sub-menu-catalog__item" key={item.id}>
												<a href="#" className="sub-menu-catalog__link">{item.label}</a>
											</li>
										))}
									</ul>

									<ul className="sub-menu-catalog__list">
										{NededKatalog.listTwo.map(item => (
											<li className="sub-menu-catalog__item" key={item.id}>
												<a href="#" className="sub-menu-catalog__link">{item.label}</a>
											</li>
										))}
									</ul>

									<ul className="sub-menu-catalog__list">
										{NededKatalog.listThree.map(item => (
											<li className="sub-menu-catalog__item" key={item.id}>
												<a href="#" className="sub-menu-catalog__link">{item.label}</a>
											</li>
										))}
									</ul>

									<ul className="sub-menu-catalog__list">
										{NededKatalog.listfour.map(item => (
											<li className="sub-menu-catalog__item" key={item.id}>
												<a href="#" className="sub-menu-catalog__link">{item.label}</a>
											</li>
										))}
									</ul>

									<ul className="sub-menu-catalog__list">
										{NededKatalog.listfive.map(item => (
											<li className="sub-menu-catalog__item" key={item.id}>
												<a href="#" className="sub-menu-catalog__link">{item.label}</a>
											</li>
										))}
									</ul>
								</div>

								<div className="sub-menu-catalog__footer">
									<a href="#" className="sub-menu-catalog__all">Смотреть все</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}

export default HeaderFooter