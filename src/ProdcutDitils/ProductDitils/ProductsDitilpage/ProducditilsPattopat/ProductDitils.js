import React from "react";
import "./productDitils.css";
import Subscribeforupdates from "../Subscribeforupdates/Subscribeforupdates";
import OverViewComponent from "../../OverViewComponent/OverViewComponent";
import OverViewButton from "../../OverViewButton/OverViewButton";
import SingleProductDitils from "../../SingleProductDitils/SingleProductDitils";
import RecommendedForYous from "../../../../Pages/Home/Home/RecommendedForYous/RecommendedForYous/RecommendedForYous";
import RecommendedForYousPrdoductDitilspage from "../../RecommendedForYousPrdoductDitilspage/RecommendedForYousPrdoductDitilspage/RecommendedForYousPrdoductDitilspage";
import RelatedProductsDitilsPages from "../RelatedProductsDitilsPage/RelatedProductsDitilsPage/RelatedProductsDitilsPages";
import { Link } from "react-router-dom";

const ProductDitils = () => {
  return (
    <section style={{marginTop:"50px"}}> 
      <nav className="d-flex gap-4 " style={{ paddingLeft:"108px" }}>
        <Link className="style_ditils_page_navber" to="/">
          Home
        </Link>
        <span className="line_style_paduct"></span>
        <Link className="style_ditils_page_navber" to="/">
          Electronics
        </Link>
        <span className="line_style_paduct"></span>
        <Link className="style_ditils_page_navber" to="/">
          LG
        </Link>
        <span className="line_style_paduct"></span>
        <Link className="style_ditils_page_navber" to="/">
          LG C2 42 4k
        </Link>
      </nav>
      <div>
        <SingleProductDitils></SingleProductDitils>
        <OverViewButton></OverViewButton>
        <OverViewComponent></OverViewComponent>

        <RelatedProductsDitilsPages></RelatedProductsDitilsPages>

        <RecommendedForYousPrdoductDitilspage></RecommendedForYousPrdoductDitilspage>
        <Subscribeforupdates></Subscribeforupdates>
      </div>
    </section>
  );
};

export default ProductDitils;
