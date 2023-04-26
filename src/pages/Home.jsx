import HomeStyle from "../styles/Home.module.css";
import { useDraggable } from "react-use-draggable-scroll";
import NavBar from "../components/NavBar";
import { useEffect, useRef } from "react";
import { useApi } from "../hooks";
import { categoriesApi } from "../api";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ categoryName, categoryId, categoryImage }) => {
  const navigate = useNavigate();
  const handleOnClick = () => navigate('/category', { state: {id: categoryId, name: categoryName}});

  return (
    <div className={HomeStyle.category_item_container} onClick={handleOnClick}>
      <img
        src={categoryImage}
        alt={categoryName}
      />
      <span>{categoryName}</span>
    </div>
  );
};

const Home = () => {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const getCategoriesApi = useApi(categoriesApi.getCategories);

  useEffect(() => {
    getCategoriesApi.request();
  }, []);

  return (
    <main>
      {/* <NavBar /> */}
      <img
        className={HomeStyle.banner}
        src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61TD5JLGhIL._SX3000_.jpg"
        alt="banner"
      />
      <div className={HomeStyle.category_container}>
        <h2>Shop by category</h2>
        {getCategoriesApi.loading && <p>Loading...</p>}
        {getCategoriesApi.error && <p>{getCategoriesApi.error}</p>}
        <div className={HomeStyle.category_slider} {...events} ref={ref}>
          {/* {getCategoriesApi.loading ? null : console.log(getCategoriesApi.data?.data)} */}
          {getCategoriesApi.data?.data.map((category) => (
            <CategoryItem categoryName={category.name} categoryId={category.id} categoryImage={category.photo_url} key={category.id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
