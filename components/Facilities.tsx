'use client'

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title" data-aos="fade-up">
            Our Facilities
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Modern infrastructure and state-of-the-art equipment for quality service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Building Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl" data-aos="fade-right">
            <div className="aspect-[4/3] bg-steel-200 relative">
              <img
                src="/images/building.jpg.png"
                alt="GK Industries Building - Main Facility"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  if (target.src.includes('building.jpg.png')) {
                    // Try fallback
                    target.src = '/images/building.jpg'
                  } else {
                    // Use placeholder from internet
                    target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=900&fit=crop&auto=format'
                  }
                }}
              />
            </div>
          </div>

          {/* Building Info */}
          <div data-aos="fade-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Main Facility
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Our main facility in Ludhiana serves as the central hub for all our operations.
              The building houses our administrative offices, storage godowns, and processing
              facilities, ensuring efficient operations and timely service delivery.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">Focal Point Rd, Phase IV, Urban Estate Phase II, Ludhiana, Punjab 141003</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Facilities</h4>
                  <p className="text-gray-600">Storage, Processing, Admin Offices</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quality</h4>
                  <p className="text-gray-600">ISO Standards, Quality Assured</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Workshop Info */}
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Industrial Workshop
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Our fully equipped industrial workshop features modern machinery and
              experienced technicians for processing steel, scrap metal, and iron products.
              We maintain high standards of quality and precision in all our manufacturing
              and processing operations.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 mb-1">10+</div>
                <div className="text-gray-700 font-medium">Years Experience</div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 mb-1">100%</div>
                <div className="text-gray-700 font-medium">Quality Assured</div>
              </div>
            </div>
          </div>

          {/* Workshop Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl" data-aos="fade-left">
            <div className="aspect-[4/3] bg-steel-200 relative">
              <img
                src="/images/industries-workshop.png"
                alt="GK Industries Workshop - Manufacturing Facility"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  if (target.src.includes('industries-workshop.png')) {
                    // Try fallback
                    target.src = '/images/workshop.jpg'
                  } else {
                    // Use placeholder from internet
                    target.src = 'https://images.unsplash.com/photo-1581091877018-df6b7ef56f79?w=1200&h=900&fit=crop&auto=format'
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
