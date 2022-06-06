import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem}) => {
    const {imageUrl, name, price, quantity} = cartItem;
    const {addItemToCart, removeItemFromCart, removeAllItemsFromCart } = useContext(CartContext);

    const addItem = () => {addItemToCart(cartItem)};
    const removeItem = () => {removeItemFromCart(cartItem)};
    const removeAllItems = () => {removeAllItemsFromCart(cartItem)};

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItem}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow'onClick={addItem}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={removeAllItems}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;