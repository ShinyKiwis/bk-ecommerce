import HomeStyle from "../styles/Home.module.css";
import { useDraggable } from "react-use-draggable-scroll";
import NavBar from "../components/NavBar";
import { useRef } from "react";

const CategoryItem = ({ categoryName }) => {
  return (
    <div className={HomeStyle.category_item_container}>
      <img
        src="https://www.royalautomobileclub.co.uk/wp-content/uploads/2021/01/shutterstock_tablet_laptop_phone-scaled.jpg"
        alt="category"
      />
      <span>{categoryName}</span>
    </div>
  );
};

const Home = () => {
  const ref = useRef();
  const { events } = useDraggable(ref);
  const categories = [
    "Phones",
    "Computers",
    "Tablets",
    "Headphones",
    "Controllers",
    "Mouses",
    "Keyboards",
  ];
  return (
    <main>
      <NavBar />
      <img
        className={HomeStyle.banner}
        src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61TD5JLGhIL._SX3000_.jpg"
        alt="banner"
      />
      <div className={HomeStyle.category_container}>
        <h2>Shop by category</h2>
        <div className={HomeStyle.category_slider} {...events} ref={ref}>
          {categories.map((category) => (
            <CategoryItem categoryName={category} key={category} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
