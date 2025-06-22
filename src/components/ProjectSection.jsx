
const projects = [
  { title: "Ecommerce Website", desc: "Built an E-commerce store with advanced search, filters, sorting, and a seamless shopping cart experience.", link: "https://github.com/vinayak-madivalar/minimalist_ecom_store" },
  { title: "Coinsage", desc: "CoinSage is an online platform enabling users to access real-time information on cryptocurrencies.", link: "https://github.com/vinayak-madivalar/coinsage" },
  { title: "Carent", desc: "A car rental app which simplifies the process of renting vehicles for personal or business use.", link: "https://github.com/vinayak-madivalar/car-rental-app" }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col items-center justify-center pb-28 scroll-m-24">
      <h2 className="text-5xl tracking-tighter font-semibold mb-8">Projects</h2>
      <div className="grid sm:grid-cols-1 gap-6">
        {projects.map((proj) => (
          <a href={proj.link} key={proj.title} target="blank"
            className="bg-white/10 border border-white/20 p-4 rounded-xl shadow-xl transform-gpu hover:scale-105 hover:shadow-md hover:shadow-blue-400 duration-200 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-slate-200">{proj.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}



