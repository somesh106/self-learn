import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {

    return (
        <aside className="bg-dark text-white p-3 sidebar-width">
            <h5 className="fw-bold mb-4">
                Filters
            </h5>

            {/* Brand Filter */}
            <div className="mb-4">
                <h6>Brand</h6>

                <label className="d-block mb-2">
                    <input type="checkbox" className="me-2" />
                    Beauty
                </label>

                <label className="d-block mb-2">
                    <input type="checkbox" className="me-2" />
                    Adidas
                </label>

                <label className="d-block mb-2">
                    <input type="checkbox" className="me-2" />
                    Puma
                </label>
            </div>

            {/* Price Filter */}
            <div className="mb-4">
                <h6>Price</h6>

                <label className="d-block mb-2">
                    <input type="checkbox" className="me-2" />
                    High To Low
                </label>

                <label className="d-block mb-2">
                    <input type="checkbox" className="me-2" />
                    Low To High
                </label>
            </div>

            {/* Discount Filter */}
            <div className="mb-4">
                <h6>Discount</h6>

                <label className="d-block mb-2">
                    <input type="checkbox" className="me-2" />
                    50% & Above
                </label>

                <label className="d-block mb-2">
                    <input type="checkbox" className="me-2" />
                    20% & Above
                </label>
            </div>

            {/* Sort Filter */}
            <div className="mb-4">
                <h6>Sort By</h6>

                <label className="d-block mb-2">
                    <input type="checkbox" className="me-2" />
                    Latest
                </label>

                <label className="d-block mb-2">
                    <input type="checkbox" className="me-2" />
                    Popular
                </label>
            </div>
        </aside>
    );
}