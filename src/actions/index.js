const menuLoaded = (newMenu) => {
    return {
        type: "MENU_LOADED", // при этом действии
        payload: newMenu // передаваемое значение
    }
}

const menuRequested = () => {
    return {
        type: "MENU_REQUESTED", // при этом действии
    }
}

const menuError = () => {
    return {
        type: "MENU_ERROR", // при этом действии
    }
}

const addedToCart = (id) => {
    return {
        type: "ITEM_ADD_TO_CART",
        payload: id
    }
}

const deleteFromCart = (id) => {
    return {
        type: "ITEM_REMOVE_FROM_CART",
        payload: id
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFromCart
};
