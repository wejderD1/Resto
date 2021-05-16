import React from 'react';
import './menu-list-item.scss';
import { Link } from "react-router-dom";

const MenuListItem = ({ data, onAddToCart }) => {

    const { title, url, category, price } = data;

    return (
        <>
            <li className="menu__item">
                <Link to={`/${data.id}`}>
                    <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt="img"></img>
                    <div className="menu__category">Category: <span>{category}</span></div>
                    <div className="menu__price">Price: <span>{price}$</span></div>

                </Link>
                    <button onClick={() => { onAddToCart() }} className="menu__btn">Add to cart</button>
                    <span className={`menu__category_Img ${category}`}></span>

            </li>
        </>
    )
}


export default MenuListItem;