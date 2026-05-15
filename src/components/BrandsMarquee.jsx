const brands = [
  'FIAT', 'FORD', 'CHEVROLET', 'VOLKSWAGEN', 'RENAULT', 'PEUGEOT',
  'TOYOTA', 'CITROËN', 'HONDA', 'NISSAN', 'HYUNDAI', 'KIA',
]

export default function BrandsMarquee() {
  return (
    <section className="py-12 surface-invert relative overflow-hidden border-y-4 border-rb-red">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-rb-gray-950 dark:from-rb-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-rb-gray-950 dark:from-rb-gray-900 to-transparent z-10 pointer-events-none" />

      <div className="absolute top-4 left-1/2 -translate-x-1/2 mono-label !text-rb-red z-20 bg-rb-gray-950 dark:bg-rb-gray-900 px-4">
        Trabajamos con todas las marcas
      </div>

      <div className="marquee-track py-4 mt-6">
        {[...brands, ...brands].map((brand, i) => (
          <div
            key={i}
            className="flex items-center px-10 font-display tracking-[0.2em] text-3xl md:text-4xl text-white/30 hover:text-rb-red transition-colors duration-300 whitespace-nowrap"
          >
            {brand}
            <span className="mx-10 text-rb-red text-2xl">◆</span>
          </div>
        ))}
      </div>
    </section>
  )
}
