import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {CartItemContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles";

const CartIcon = () => {
  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);

  const onClickHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartItemContainer onClick={onClickHandler}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartItemContainer>
  );
};

export default CartIcon;
