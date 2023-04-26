import React from "react";
import { useState, useMemo, useEffect } from "react";
import { PaginationBar, ProductItem } from "../components";
import SearchStyle from "../styles/Search.module.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useApi } from "../hooks";
import { productsApi } from "../api";
import { useSearchParams } from "react-router-dom";

const dummyOptions = ["hihi", "haha", "huhu"];
const defaultOption = dummyOptions[0];

const dummy = Array(420).fill({
  name: "hoho",
  price: 5000000,
  image:
    "https://product.hstatic.net/1000392212/product/city_map_d942a93abd944547a24949398d9b0deb_master.png",
});

let PageSize = 50;

function Search() {
  const [currentPage, setCurrentPage] = useState(1);
  const getProductsByQueryApi = useApi(productsApi.getProductByQuery);
  // const {state} = useLocation();
  // const {id,name} = state;
  const [searchParam] = useSearchParams();
  const searchTerm = searchParam.get('q')

  const onSelect = (e) => {
    console.log(e.value);
  };
  useEffect(() => {
    getProductsByQueryApi.request(searchTerm);
  }, [searchParam])

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return getProductsByQueryApi.data?.data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, getProductsByQueryApi.data, searchParam]);

  return (
    <div className={SearchStyle.content_display}>
      <div className={SearchStyle.header}>
        <div>{`Result for ${searchTerm}`}</div>
          <Dropdown
            options={dummyOptions}
            onChange={onSelect}
            value={defaultOption}
            placeholder="Select an option"
          />
      </div>
      <div className={SearchStyle.list_display}>
        {getProductsByQueryApi.loading && <p>Loading...</p>}
        {getProductsByQueryApi.error && <p>{getProductsByQueryApi.error}</p>}
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
        totalCount={dummy.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default Search;
