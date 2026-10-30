import { useEffect, useState, useMemo } from "react";
import ProductCard from "./subcomponent/productCard";
import { fetchProucts } from "../../services";
import Pagination from 'react-bootstrap/Pagination';
import { useCommon } from "../../context/commonContex";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FixedSizeList as List } from "react-window";

import { useSelector, useDispatch } from "react-redux";                 //redux 
import { setProducts } from "../../redux/commonSlice";

export default function Dashboard() {

    // const { products, setProducts, filterProduct, search, limit } = useCommon();

    // ------redux----------
    // const { filterProduct, limit } = useCommon();
    const dispatch = useDispatch();
    const products = useSelector(
        (state) => state.common.products
    );
    const search = useSelector(
        (state) => state.common.search
    );
    // const filterProduct = useSelector(
    //     (state) => state.common.filterProduct
    // );

    const { limit } = useCommon();

    const [page, setPage] = useState(1);

    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);

    const [columnCount, setColumnCount] = useState(4);

    // const displayProduct = search.trim() === "" ? products : filterProduct;
    const allProduct = useSelector(
        (state) => state.common.allProduct
    );

    const displayProduct = useMemo(() => {
        if (search.trim() === "") {
            return products;
        }

        return allProduct.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, products, allProduct]);

    const totalPages = Math.ceil(total / limit);

    const rowCount = Math.ceil(displayProduct.length / columnCount);



    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const data = await fetchProucts(page);

            // setProducts(data?.products);
            dispatch(setProducts(data?.products));              //redux

            // console.log(data.products);
            setTotal(data.total);

            setLoading(false);
        }
        fetchData()
        // }, [page]);
    }, [page, dispatch]);                       //redux

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 576) {
                setColumnCount(1);
            }
            else if (window.innerWidth < 992) {
                setColumnCount(2);
            }
            else {
                setColumnCount(4);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    return (
        <div>
            <h1 className="shop-title"> SHOP </h1>

            <div className="row">
                {
                    loading
                        ?
                        (
                            // <List
                            //     className="hide-scrollbar"
                            //     height={700}
                            //     itemCount={2}
                            //     itemSize={390}
                            //     width="100%"
                            // >
                            <List
                                className="hide-scrollbar"
                                height={700}
                                itemCount={2}
                                itemSize={390}
                                width="100%"
                            >
                                {({ index, style }) => (
                                    <div
                                        style={{
                                            ...style,
                                            display: "flex",
                                            gap: "20px",
                                            padding: "10px"
                                        }}
                                    >
                                        {Array.from({ length: columnCount }).map((_, index) => (
                                            <div key={index} style={{ flex: 1 }}>
                                                <div className="card p-3 h-100">
                                                    <Skeleton height={200} />

                                                    <Skeleton
                                                        height={25}
                                                        className="mt-3"
                                                    />

                                                    <Skeleton width="70%" />

                                                    <Skeleton height={35} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </List>
                        )
                        :
                        (
                            <List
                                height={700}
                                // itemCount={Math.ceil(displayProduct.length / columnCount)}
                                itemCount={rowCount}
                                itemSize={390}
                                width="100%"
                            >
                                {({ index, style }) => (
                                    <div
                                        style={{
                                            ...style,
                                            display: "flex",
                                            gap: "20px",
                                            padding: "10px"
                                        }}
                                    >
                                        {Array.from({ length: columnCount }).map((_, colIndex) => {
                                            const productIndex = index * columnCount + colIndex;
                                            const product = displayProduct[productIndex];

                                            if (!product) return null;

                                            return (
                                                <div key={product.id} style={{ flex: 1 }}>
                                                    <ProductCard
                                                        product={product}
                                                        colorIndex={productIndex}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </List>
                        )
                }
            </div>
            {
                search.trim() === "" && <Pagination className="justify-content-center pt-4">

                    <Pagination.First onClick={() => setPage(1)} />
                    <Pagination.Prev
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                    />

                    {page > 2 && <Pagination.Ellipsis />}

                    {[...Array(totalPages)].map((_, index) => {

                        const pageNumber = index + 1;
                        if (
                            pageNumber === 1 ||
                            pageNumber === totalPages ||
                            (pageNumber >= page - 1 && pageNumber <= page + 1)
                        ) {
                            return (
                                <Pagination.Item
                                    key={index}
                                    active={page === pageNumber}
                                    onClick={() => setPage(pageNumber)}
                                >
                                    {pageNumber}
                                </Pagination.Item>
                            );
                        }

                        return null;
                    })}

                    {page < totalPages - 1 && <Pagination.Ellipsis />}

                    <Pagination.Next
                        disabled={page === totalPages}
                        onClick={() => setPage(page + 1)}
                    />

                    <Pagination.Last onClick={() => setPage(totalPages)} />
                </Pagination>
            }
        </div>
    )
}