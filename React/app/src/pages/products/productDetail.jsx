import { useParams } from "react-router-dom";
import { useCommon } from "../../context/commonContex";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLikedProduct, setCartProduct } from "../../redux/commonSlice";

export const ProductDetail = () => {
  // const { allProduct, likedProduct, setLikedProduct, cartProduct, setCartProduct } = useCommon();
  const { id } = useParams();


  const [count, setCount] = useState(0);
  const [image, setImage] = useState([]);

  const [currentImage, setCurrentImage] = useState(0);


  const dispatch = useDispatch();
  const allProduct = useSelector(
    (state) => state.common.allProduct
  );
  const likedProduct = useSelector(
    (state) => state.common.likedProduct
  );
  const cartProduct = useSelector(
    (state) => state.common.cartProduct
  );

  const detail = allProduct.find(item => item.id === Number(id));
  const isLiked = likedProduct.some(item => item.id === Number(id));
  const isCart = cartProduct.some(item => item.id === Number(id));

  useEffect(() => {
    if (detail) {
      setImage(detail.images);
    }
  }, [detail]);

  if (!detail) {
    return <h4 className="text-center mt-5 fw-normal text-muted fs-5">Loading product details...</h4>;
  }

  const handleClick = (itemId) => {
    const isLiked = likedProduct.some(item => item.id === Number(itemId));

    if (isLiked) {
      return;
    }

    const toAdd = allProduct.find(item => item.id === itemId);
    dispatch(setLikedProduct([...likedProduct, toAdd]));
  };

  const handleCartClick = (itemId) => {
    const isCart = cartProduct.some(item => item.id === Number(itemId));

    if (isCart) {
      return;
    }

    const toAdd = allProduct.find(item => item.id === itemId);
    dispatch(setCartProduct([...cartProduct, toAdd]));
  };

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === detail.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? detail.images.length - 1 : prev - 1
    );
  };
  // console.log(allProduct);

  return (
    <div className="container py-5" style={{ maxWidth: '1100px' }}>

      <div className="card border-0 shadow-sm rounded-4 bg-white p-3 p-md-4">
        <div className="row g-5 align-items-center">

          {/* Left Side: Image Gallery Area */}
          <div className="col-12 col-lg-5 text-center">
            <div className="d-flex flex-column align-items-center gap-2">

              {/* Product Main Showcase Image container */}
              <div className="p-4 bg-light rounded-4 border border-light-subtle d-flex align-items-center justify-content-center w-100 min-vh-50">

                <img
                  src={detail.images[currentImage]}
                  alt={detail.title}
                  className="img-fluid object-fit-contain w-100"
                />
              </div>

              {/* Slider UI Controls: Plain Text Arrows with slightly larger 'fs-2' footprint */}
              <div className="d-flex align-items-center gap-4 mt-2">
                <button onClick={handlePrev} className="btn btn-link text-secondary text-decoration-none px-3 py-1 fs-2 border-0 shadow-none lh-1">
                  ‹
                </button>

                <button onClick={handleNext} className="btn btn-link text-secondary text-decoration-none px-3 py-1 fs-2 border-0 shadow-none lh-1">
                  ›
                </button>
              </div>

            </div>
          </div>

          {/* Right Side: Product Meta Information Grid */}
          <div className="col-12 col-lg-7 ps-lg-5">

            <span className="text-uppercase text-muted fw-normal d-block mb-2 small tracking-wider">
              {detail.category}
            </span>

            <h2 className="fw-normal text-dark mb-3 fs-3">
              {detail.title}
            </h2>

            <p className="text-secondary lh-base mb-4 fw-normal fs-6">
              {detail.description}
            </p>

            <div className="border-bottom border-light my-4"></div>

            {/* Specifications Info Grid */}
            <div className="row g-4">

              <div className="col-6 col-sm-4">
                <label className="text-uppercase text-muted fw-normal d-block mb-1 small">
                  Brand
                </label>
                <span className="text-dark fw-normal fs-6">
                  {detail.brand || "Generic"}
                </span>
              </div>

              <div className="col-6 col-sm-4">
                <label className="text-uppercase text-muted fw-normal d-block mb-1 small">
                  Price
                </label>
                <span className="text-dark fw-normal fs-5">
                  ${detail.price}
                </span>
              </div>

              <div className="col-6 col-sm-4">
                <label className="text-uppercase text-muted fw-normal d-block mb-1 small">
                  Discount
                </label>
                <span className="text-danger fw-normal fs-6">
                  {detail.discountPercentage}% OFF
                </span>
              </div>

              <div className="col-6 col-sm-4">
                <label className="text-uppercase text-muted fw-normal d-block mb-1 small">
                  Stock Available
                </label>
                <span className="text-dark fw-normal d-flex align-items-center gap-2 fs-6">
                  <span className="d-inline-block rounded-circle bg-success" style={{ width: '7px', height: '7px' }}></span>
                  {detail.stock} units
                </span>
              </div>

              <div className="col-6 col-sm-4">
                <label className="text-uppercase text-muted fw-normal d-block mb-1 small">
                  Rating
                </label>
                <span className="text-dark fw-normal fs-6">
                  ★ {detail.rating}
                </span>
              </div>

              <div className="col-6 col-sm-4">
                <label className="text-uppercase text-muted fw-normal d-block mb-1 small">
                  Warranty
                </label>
                <span className="text-dark fw-normal fs-6">
                  {detail.warrantyInformation}
                </span>
              </div>

              <div className="col-12 col-sm-6">
                <label className="text-uppercase text-muted fw-normal d-block mb-1 small">
                  Shipping Information
                </label>
                <span className="text-dark fw-normal fs-6">
                  {detail.shippingInformation}
                </span>
              </div>

              <div className="col-12 col-sm-6">
                <label className="text-uppercase text-muted fw-normal d-block mb-1 small">
                  Return Policy
                </label>
                <span className="text-dark fw-normal fs-6">
                  {detail.returnPolicy}
                </span>
              </div>

            </div>

            {/* Action Layout */}
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mt-5 pt-2">

              {/* Left Side: Minimalist Quantity Counter */}
              <div>
                <div className="d-flex align-items-center border border-light-subtle rounded-3 bg-light p-1">
                  <button onClick={() => setCount(count - 1)} disabled={count === 0} className="btn btn-link text-secondary text-decoration-none px-3 fs-4 py-1 border-0 shadow-none lh-1">
                    −
                  </button>
                  <span className="text-dark fw-normal px-2 text-center fs-6" style={{ minWidth: '35px' }}>
                    {count}
                  </span>
                  <button onClick={() => setCount(count + 1)} className="btn btn-link text-secondary text-decoration-none px-3 fs-4 py-1 border-0 shadow-none lh-1">
                    +
                  </button>
                </div>
              </div>

              {/* Right Side Group: Wishlist Button + Buy Now Button */}
              <div className="d-flex align-items-center gap-3 ms-auto">

                <button onClick={() => handleClick(detail.id)} disabled={isLiked} className="btn btn-outline-secondary px-3 py-2 fw-normal rounded-3 fs-6">
                  Add to Wishlist
                </button>

                <button onClick={() => handleCartClick(detail.id)} disabled={isCart} className="btn btn-outline-secondary px-3 py-2 fw-normal rounded-3 fs-6">
                  Add to Cart
                </button>

                <button className="btn btn-dark py-2 fw-normal rounded-3 fs-6">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};