import React from "react";
import { useState, useMemo } from "react";
import { PaginationBar, ProductItem } from "../components";
import SearchStyle from "../styles/Search.module.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const dummyOptions = ["hihi", "haha", "huhu"];
const defaultOption = dummyOptions[0];

const dummy = Array(100).fill({
  name: "hoho",
  price: 5000000,
  image:
    "https://product.hstatic.net/1000392212/product/city_map_d942a93abd944547a24949398d9b0deb_master.png",
});

let PageSize = 10;

function Search() {
  const [currentPage, setCurrentPage] = useState(1);

  const onSelect = (e) => {
    console.log(e.value);
  };
  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return dummy.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className={SearchStyle.content_display}>
      <div className={SearchStyle.header}>
        <div>Result for huhu</div>
          <Dropdown
            options={dummyOptions}
            onChange={onSelect}
            value={defaultOption}
            placeholder="Select an option"
          />
      </div>
      <div className={SearchStyle.list_display}>
        {currentData.map((item) => (
          <ProductItem
            productName={item.name}
            productPrice={item.price}
            productImage={item.image}
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
