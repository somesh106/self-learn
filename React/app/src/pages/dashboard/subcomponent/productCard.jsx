import { IonIcon } from "@ionic/react";
import { heart, heartOutline, cart, cartOutline } from "ionicons/icons";
// import { useCommon } from '../../../context/commonContex';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import toast from "react-hot-toast";
import { setLikedProduct } from "../../../redux/commonSlice";
import { setCartProduct } from '../../../redux/commonSlice';


export default function ProductCard(props) {

    const { product, colorIndex } = props;

    const dispatch = useDispatch();

    const likedProduct = useSelector(
        (state) => state.common.likedProduct
    );
    // console.log("likedProduct", likedProduct);

    const cartProduct = useSelector((state) => state.common.cartProduct);

    const isLiked = likedProduct.some((item) => item.id === product.id);
    const isCarted = cartProduct.some((item) => item.id === product.id);
    // console.log(product.id);

    const handleLike = () => {
        const alreadyLiked = likedProduct.some(
            (item) => item.id === product.id
        );

        let updatedLiked;    //updated Array;
        if (alreadyLiked) {
            updatedLiked = likedProduct.filter(
                (item) => item.id !== product.id
            );
        } else {
            updatedLiked = [...likedProduct, product];
            toast.success("Item added to WishList");
        }
        dispatch(setLikedProduct(updatedLiked));
    }

    const handleCart = () => {
        const alreadyInCart = cartProduct.some(
            (item) => item.id === product.id
        );

        let updatedCart;
        if (alreadyInCart) {
            updatedCart = cartProduct.filter(
                (item) => item.id !== product.id
            );
        } else {
            updatedCart = [...cartProduct, product];
            toast.success("Item added to Cart.");
        }
        dispatch(setCartProduct(updatedCart));
    }

    const navigate = useNavigate();

    const handleClick = (id) => {
        console.log(id)
        navigate(`/productDetail/${id}`);
    }

    return (
        <div className="card-wrapper">
            <article className={`shop-card bg-${(colorIndex % 4) + 1}`}>
                <div className="shop-card__name">
                    <p>{product.title}</p>
                </div>

                <div onClick={() => handleClick(product.id)} className="shop-card__img">
                    <img src={product.thumbnail} alt={product.title} />
                </div>

                <div className="shop-card__precis d-flex justify-content-between align-items-end">

                    <button onClick={handleLike}
                        className="shop-card__icon border-0 bg-transparent">
                        <IonIcon icon={isLiked ? heart : heartOutline}
                            style={{ color: isLiked ? "red" : "" }}
                        />
                    </button>

                    <div className="text-center">
                        {/* <span className="shop-card__preci shop-card__preci--before d-block">
                            {product.price}
                        </span> */}

                        <span className="shop-card__preci shop-card__preci--now">
                            ${product.price}
                        </span>
                    </div>

                    <button onClick={handleCart}
                        className="shop-card__icon border-0 bg-transparent">
                        <IonIcon icon={isCarted ? cart : cartOutline}
                            style={{ color: isCarted ? "red" : "" }} />
                    </button>
                </div>
            </article>
        </div>
    );
}