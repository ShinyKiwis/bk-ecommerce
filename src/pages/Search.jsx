import React from "react";
import { useState, useMemo } from "react";
import { PaginationBar, ProductItem } from "../components";
import SearchStyle from "../styles/Search.module.css";

const dummy = Array(100).fill({
  name: "hoho",
  price: 5000000,
  image:
    "https://product.hstatic.net/1000392212/product/city_map_d942a93abd944547a24949398d9b0deb_master.png",
});

let PageSize = 10;

function Search() {
  const [currentPage, setCurrentPage] = useState(1);
  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return dummy.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className={SearchStyle.content_display}>
      <div>Result for huhu</div>
      <div>this is a filter bar</div>
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
