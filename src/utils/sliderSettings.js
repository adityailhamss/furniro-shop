import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  lazyLoad: "ondemand",
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-[#B88E2F] text-white p-2 rounded-full shadow-lg hover:bg-[#a17a25] transition z-10"
    >
      <FaChevronRight size={20} />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-[#B88E2F] text-white p-2 rounded-full shadow-lg hover:bg-[#a17a25] transition z-10"
    >
      <FaChevronLeft size={20} />
    </button>
  );
}
