import React, { useEffect } from "react";
import { useState, useMemo } from "react";
import { PaginationBar, ProductItem } from "../components";
import SearchStyle from "../styles/Search.module.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useApi } from "../hooks";
import { productsApi } from "../api";
import { useLocation } from "react-router-dom";

const dummyOptions = ["hihi", "haha", "huhu"];
const defaultOption = dummyOptions[0];

let PageSize = 20;

function Category() {
  const [currentPage, setCurrentPage] = useState(1);
  const getProductsByCategoryApi = useApi(productsApi.getProductsByCategory);
  const {state} = useLocation();
  const {id,name} = state;

  const onSelect = (e) => {
    console.log(e.value);
  };
  

  useEffect(() => {
    getProductsByCategoryApi.request(id);
  }, [state])

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return getProductsByCategoryApi.data?.data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, getProductsByCategoryApi.data]);

  return (
    <div className={SearchStyle.content_display}>
      <div className={SearchStyle.header}>
        <h1>{name}</h1>
          <Dropdown
            options={dummyOptions}
            onChange={onSelect}
            value={defaultOption}
            placeholder="Select an option"
          />
      </div>
      <div className={SearchStyle.list_display}>
        {getProductsByCategoryApi.loading && <p>Loading...</p>}
        {getProductsByCategoryApi.error && <p>{getProductsByCategoryApi.error}</p>}
        {currentData?.map((item) => (
          <ProductItem
            key={item.id}
            productId={item.id}
            productName={item.name}
            productPrice={item.price}
            productImage={item.photo_url}
          />
        ))}
      </div>
      <PaginationBar
        currentPage={currentPage}
        totalCount={getProductsByCategoryApi.data ? getProductsByCategoryApi.data.data.length : 1}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default Category;
