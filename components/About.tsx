'use client'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title" data-aos="fade-up">
            About Us
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Leading the industry with quality, reliability, and excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Company Info */}
            <div data-aos="fade-right">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                GK Pvt Industries
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With years of experience in the steel industry, GK Pvt Industries
                has established itself as a trusted name in Ludhiana and surrounding regions.
                We specialize in providing top-quality raw steel, scrap metal, and iron products.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our commitment to excellence, customer satisfaction, and timely delivery has
                made us the preferred choice for businesses across multiple cities including
                Faridkot, Jalandhar, and Delhi.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg font-semibold">
                  Quality Assured
                </span>
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg font-semibold">
                  Reliable Service
                </span>
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg font-semibold">
                  Timely Delivery
                </span>
              </div>
            </div>

            {/* Leadership Card */}
            <div className="card bg-gradient-to-br from-primary-600 to-steel-600 text-white overflow-hidden" data-aos="fade-left">
              <div className="text-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden border-4 border-white/30">
                  <img
                    src="/images/cto.png"
                    alt="Santoshi - CTO & Owner"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = `
                          <svg
                            class="w-12 h-12 text-white"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        `
                      }
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Santoshi kyshap Rajput</h3>
                <p className="text-primary-200 mb-4">CTO & Owner</p>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Under the leadership of Santoshi kyshap Rajput, GK Pvt Industries has grown to become
                  a trusted partner for businesses seeking quality steel products and
                  reliable services. With a vision for excellence and a commitment
                  to customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
