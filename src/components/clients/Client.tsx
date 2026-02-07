import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';




const Client = () => {
  const testimonials = [
    {
      id: 1,
      name: "Robin Ayala Doe",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
      id: 2,
      name: "John De marli",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      id: 3,
      name: "Rowhan Smith",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
      id: 5,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
      id: 6,
      name: "Emma Wilson",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold">What our happy clients say</h1>
      <p className="text-lg mt-2">
        Don't just take our word for it. Here's what our customers have to say
        about us.
      </p>
      <div className=" mt-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={
            {nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom'}
          }
          pagination={{
            clickable: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="border border-gray-100 rounded-lg p-6 bg-white shadow-md min-h-80 ">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full rounded-full mr-3" />
                </div>
                {/* stars */}
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="mt-2 text-gray-600">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-4">
          <button className="swiper-button-prev-custom bg-blue-500 text-white px-4 py-2 rounded-md mr-2 transition-all duration-200"><BsChevronCompactLeft /></button>
          <button className="swiper-button-next-custom bg-blue-500 text-white px-4 py-2 rounded-md transition-all duration-200"><BsChevronCompactRight /></button>
        </div>
      </div>
    </section>
  );
};

export default Client;
