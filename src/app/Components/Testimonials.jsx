
import { Star, Quote } from "lucide-react";



const Testimonials = () => {
    const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "University Student",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
    review:
      "StudyNook has made finding a quiet study space so much easier. The rooms are comfortable and perfect for focused study sessions.",
  },
  {
    name: "Tanvir Hasan",
    role: "Engineering Student",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
    review:
      "The booking process is simple, and the facilities are excellent. I highly recommend it for group study and project work.",
  },
  {
    name: "Faria Islam",
    role: "University Student",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&h=160&q=80",
    review:
      "I love the flexible booking options and peaceful environment. It helps me stay organized and productive throughout the week.",
  },
];
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-9 text-center">
        <span className="text-sm font-bold uppercase tracking-wider text-cyan-600">
          Student Experiences
        </span>

        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          What Our Students <span className="text-cyan-600">Say</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
          Discover how StudyNook helps students find their ideal study space.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <Quote size={30} className="text-cyan-200" />

            <div className="mt-4 flex gap-1 text-amber-400">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  size={17}
                  fill="currentColor"
                  strokeWidth={1}
                />
              ))}
            </div>

            <p className="mt-4 min-h-28 text-sm leading-7 text-slate-600">
              “{item.review}”
            </p>

            <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-5">
              <img
                src={item.image}
                alt={item.name}
                className="size-12 rounded-full object-cover ring-2 ring-cyan-100"
              />

              <div>
                <h3 className="font-bold text-slate-900">{item.name}</h3>
                <p className="mt-1 text-xs text-slate-500">{item.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;