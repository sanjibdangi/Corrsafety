import { useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  rating: number;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={64} className="text-emerald-600" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 leading-relaxed mb-6 relative z-10 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-emerald-600 text-sm font-semibold">{testimonial.position}</div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-emerald-500/50"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-emerald-500/50"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
