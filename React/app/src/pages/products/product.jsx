import React from 'react'
import { useCommon } from '../../context/commonContex'
import { IoMdClose } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { setCartProduct, setLikedProduct } from "../../redux/commonSlice";


export const Product = () => {

    const { isLike, isCart
        // , cartProduct, setCartProduct, likedProduct, setLikedProduct
    } = useCommon();

    const dispatch = useDispatch();
    const cartProduct = useSelector(
        (state) => state.common.cartProduct
    );
    const likedProduct = useSelector(
        (state) => state.common.likedProduct
    );

    const handleWihlistRemovedClick = (id) => {
        const updatedArray = likedProduct.filter((item) => item.id !== id);
        dispatch(setLikedProduct(updatedArray));
    }
    const handleCartlistRemovedClick = (id) => {
        const updatedArray = cartProduct.filter((item) => item.id !== id);
        dispatch(setCartProduct(updatedArray));
    }

    return (
        <>
            {/* =================== WISHLIST =================== */}
            {isLike && (
                <div className="container py-4">
                    <h2 className="fw-bold mb-4">Wishlist Items</h2>

                    {likedProduct.length > 0 ? (
                        likedProduct.map((product) => (
                            <div
                                key={product.id}
                                className="card flex-row shadow-lg rounded-4 border-0 mb-4 position-relative mx-auto product-card"
                            >
                                <IoMdClose
                                    className="position-absolute top-0 end-0 m-3 fs-4 text-danger"
                                    role="button"
                                    onClick={() => handleWihlistRemovedClick(product.id)}
                                />

                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="img-fluid p-3 product-img"
                                />

                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <div className="w-75">
                                        <h5 className="fw-bold">{product.title}</h5>

                                        <p className="text-muted small mb-3">
                                            {product.description}
                                        </p>

                                        {/* <span className="badge bg-warning text-dark">
                                                ⭐ {product.rating}
                                            </span> */}
                                    </div>

                                    <div className="text-end pe-4">
                                        <h4 className="text-success fw-bold mb-3">
                                            ${product.price}
                                        </h4>

                                        <button className="btn btn-dark">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h4 className="text-center">No Wishlist Items.</h4>
                    )}
                </div>
            )}

            {/* =================== CART =================== */}
            {isCart && (
                <div className="container py-4">
                    <h2 className="fw-bold mb-4">Cart Items</h2>

                    {cartProduct.length > 0 ? (
                        cartProduct.map((product) => (
                            <div
                                key={product.id}
                                className="card flex-row shadow-lg rounded-4 border-0 mb-4 position-relative mx-auto product-card"
                            >
                                <IoMdClose
                                    className="position-absolute top-0 end-0 m-3 fs-4 text-danger"
                                    role="button"
                                    onClick={() => handleCartlistRemovedClick(product.id)}
                                />

                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="img-fluid p-3 product-img"
                                />

                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <div className="w-75">
                                        <h5 className="fw-bold">{product.title}</h5>

                                        <p className="text-muted small mb-3">
                                            {product.description}
                                        </p>

                                        {/* <span className="badge bg-warning text-dark">
                                            ⭐ {product.rating}
                                        </span> */}
                                    </div>

                                    <div className="text-end">
                                        <h4 className="text-success fw-bold mb-3">
                                            ${product.price}
                                        </h4>

                                        <button className="btn btn-dark">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h4 className="text-center">No Cart Items.</h4>
                    )}
                </div>
            )}
        </>
    )
}
