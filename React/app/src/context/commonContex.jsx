import { createContext } from "react";
import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

const commonContext = createContext(null);

export const CommonProvider = ({ children }) => {

    // const [search, setSearch] = useState("");
    // const [products, setProducts] = useState([]);
    // const [allProduct, setAllProduct] = useState([]);
    // const [cartProduct, setCartProduct] = useState([]);
    // const [likedProduct, setLikedProduct] = useState([]);
    // const [filterProduct, setFilterProduct] = useState([]);

    const limit = 8;

    const dispatch = useDispatch();

    const userInfo = useSelector(
        (state) => state.auth.userInfo
    );

    // const [userInfo, setUserInfo] = useState(() => {
    //     const savedUser = localStorage.getItem("userInfo");
    //     return savedUser
    //         ? JSON.parse(savedUser)
    //         : {
    //             firstName: "",
    //             lastName: "",
    //             image: "",
    //         };
    // })

    const [isLike, setIsLike] = useState(false);
    const [isCart, setIsCart] = useState(false);

    // const handleLikedProduct = (id) => {
    //     const likedItem = allProduct.find((item) => item.id === id);
    //     if (!likedItem) return;
    //     setLikedProduct((prev) => {
    //         const alreadyLiked = prev.some((item) => item.id === id);
    //         if (alreadyLiked) {
    //             return prev.filter((item) => item.id !== id);
    //         }
    //         toast.success('Item added to Wishlist.');
    //         return [...prev, likedItem];
    //     });
    // };
    // console.log(userInfo);

    // const handleCartProduct = (id) => {
    //     const cartItem = allProduct.find((item) => item.id === id);
    //     if (!cartItem) return;
    //     setCartProduct((prev) => {
    //         const alreadyInCart = prev.some((item) => item.id === id);
    //         if (alreadyInCart) {
    //             return prev.filter((item) => item.id !== id);
    //         }
    //         toast.success('Item added to Cart.');
    //         return [...prev, cartItem];
    //     });
    // };

    return (
        <commonContext.Provider value={{
            limit, isLike, setIsLike, isCart, setIsCart
            // ,likedProduct, setLikedProduct, products, setProducts, cartProduct, setCartProduct, handleLikedProduct, handleCartProduct, search, setSearch, filterProduct, setFilterProduct, allProduct, setAllProduct, setUserInfo, userInfo
        }}>
            {children}
        </commonContext.Provider>
    );
};

export const useCommon = () => useContext(commonContext);