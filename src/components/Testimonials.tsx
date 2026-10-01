import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [  {
    quote: "BlueStone Financial made the entire process so easy. I was approved in 15 minutes and the funds were in my account the very next morning. It really saved our family vacation!",
    name: "Jessica Martinez",
    title: "Personal Loan Customer",
    image: testimonial1,
    rating: 5,
  },
  {
    quote: "Needed funds quickly for home repairs and the process was incredibly transparent. The affiliated banks offered great rates with absolutely no hidden prepayment fees. Highly recommend!",
    name: "David Chen",
    title: "Verified Customer",
    image: testimonial2,
    rating: 5,
  },
  {
    quote: "Outstanding customer service and remarkably fast funding. The interest rate was exactly what was promised. A truly professional financial partner.",
    name: "Sarah Williams",
    title: "Verified Customer",
    image: testimonial3,
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-white shadow-sm border border-gray-100 text-gray-500">
            <span className="font-bold text-green-600 flex items-center gap-1">
              <Star className="w-4 h-4 fill-current" /> Trustpilot
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            Excellent 4.8 out of 5
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}>
            Don't Just Take Our Word For It
          </h2>
          <p className="text-lg text-gray-500">
            Read what our clients have to say about their experience with our fast, transparent lending process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 relative bg-white">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1" 
                style={{ background: "linear-gradient(90deg, hsl(160 60% 45%), hsl(38 92% 50%))" }} />
              
              <CardContent className="pt-10 pb-8 px-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" style={{ color: "hsl(38 92% 50%)" }} />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2" style={{ borderColor: "hsl(160 60% 45% / 0.2)" }}>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>{testimonial.name}</p>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-0.5">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
