import { Swiper, SwiperSlide } from "swiper/react"; // Swiper va SwiperSlide import qilamiz
import "swiper/css"; // Swiper CSS-ni import qilish
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

// function ImageCarousel({ images }: { images: any[] }) {
//   return (
//     <div>
//       {images.map((imageUrl: string) => (
//         <img src={imageUrl} key={imageUrl} />
//       ))}
//     </div>
//   );
// }

const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      className="image-carousel"
      spaceBetween={0} // Slaydlarga bo'shliq
      slidesPerView={1} // Bir vaqtning o'zida ko'rsatiladigan slaydlar soni
      navigation // Navigatsiya tugmachalari
      pagination={{ clickable: true }} // Pagination qo'shish
      loop // Slaydlar cheksiz aylanishi
    >
      {images.map((imageUlr, index) => (
        <SwiperSlide key={index} className="project-item">
          <img src={imageUlr} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
