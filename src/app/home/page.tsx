import SectionCategories from "./SectionCategories";
import SectionHeader from "./SectionHeader";
// import SectionMidBanner from "./SectionMidBanner";
import SectionProducts from "./SectionProducts";
import SectionQuote from "./SectionQuote";
import SectionSlider from "./SectionSlider";

const homePage = () => {
  return (
    <div>
      <div className="my-7">
        <SectionHeader />
      </div>

      <div className="pt-10">
        <SectionSlider />
      </div>

      <div className="py-24">
        <SectionQuote />
      </div>

      <div className="pb-24">
        <SectionProducts />
      </div>

      <div className="pb-24">
        <SectionCategories />
      </div>
      {/* 
      <div className="pb-24">
        <SectionMidBanner />
      </div> */}
    </div>
  );
};

export default homePage;
