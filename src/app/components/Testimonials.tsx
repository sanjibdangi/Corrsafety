import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Star } from 'lucide-react';
import { TestimonialsCarousel } from './TestimonialsCarousel';

export function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const testimonials = [
    {
      quote:
        'I have worked hand and hand with Corr Safety for the last year and have been impressed with the dedication, professionalism and commitment to satisfying our safety needs. Gary Orefice, Dan Mitchell and the rest of the Corr Safety team have been a pleasure to work with and I look forward to working with them far into the future.',
      author: 'Brendan M Rafferty',
      position: 'Area Safety Manager, Safway',
      rating: 5,
    },
    {
      quote:
        'I have worked with Dan and Corr Safety for quite a few years now and their dedication to ensuring the safety of my employees astonishes me. He has visited my team multiple times to provide OSHA training for Aerial lifts, forklifts, and toolbox talks regarding various topics. He always responds quickly whenever we need assistance with an upcoming project and constantly provides guidance on new ways to ensure our employees work in a safe environment.',
      author: 'Ken Piccari',
      position: 'General Manager, Cypress Door and Glass LLC',
      rating: 5,
    },
    {
      quote:
        'CORR Safety Professionals was excellent to work with during the updating, revision and development of our Safety Programs, which assisted in the transition to ISNetworld effortless. Their vast experience resulted in an intuition that simplifies the process of coordinating and managing change. They were instrumental in ensuring the safety of our employees and subcontractors. I highly recommend them.',
      author: 'Ken Umstead, JR',
      position: 'Safety Director',
      rating: 5,
    },
    {
      quote:
        'CORR Safety has been a great partner to work with. They have partnered with SunPower on a multiple kw projects over the last few years and have far exceeded all expectations. Their daily on site presence and collaborations with our multiple site contractors have ensured the highest level of safety. From managing the activities, preparing and reviewing required documentation, and conducting on-site training CORR provides great value to any project.',
      author: 'Brian Bettencourt',
      position: 'Senior Project Manager, SunPower',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <TestimonialsCarousel testimonials={testimonials} />

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 rounded-full border-2 border-emerald-200">
            <Star className="fill-emerald-600 text-emerald-600" size={20} />
            <span className="text-emerald-900 font-semibold">Trusted by Industry Leaders Since 2018</span>
            <Star className="fill-emerald-600 text-emerald-600" size={20} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}