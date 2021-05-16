import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../spinner";
import { menuLoaded, menuRequested, menuError } from "../../actions/index"
import WithRestoService from "../hoc";

import "./itemPage.css";
class ItemPage extends Component {

    componentDidMount() {
        const { menuRequested, menuLoaded, menuError, RestoService } = this.props;

        if (this.props.menuItems.length === 0) {
            menuRequested();

            RestoService.getMenuItems()
                .then(res => menuLoaded(res))
                .catch(error => menuError());
        }
    }

    render() {
        const { loading, menuItems, match } = this.props;
        const {id} = match.params;

        if (loading) {
            return (
                <div className="item__page">
                    <Spinner />
                </div>
            )
        }

        const item = menuItems.find(elem => +elem.id === +id)

        const{title, url, category, price} = item;

        return (
            <div className="item__page">
                <div className="menu__item item__block">
                    <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt="img"></img>
                    <div className="menu__category">Category: <span>{category}</span></div>
                    <div className="menu__price">Price: <span>{price}</span></div>
                    <button className="menu__btn">Add to cart</button>
                    <span className={`menu__category_Img ${category}`}></span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage))