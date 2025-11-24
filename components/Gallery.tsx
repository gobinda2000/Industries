'use client'

export default function Gallery() {
  const images = [
    {
      id: 1,
      title: 'Our Transport Fleet',
      description: 'Professional truck fleet for all your transportation needs',
      image: '/images/truck-1.webp',
      fallbacks: ['/images/truck-2.jpg', '/images/truck-3.webp'],
      placeholder: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&auto=format',
      category: 'transport',
    },
    {
      id: 2,
      title: 'Steel & Iron Products',
      description: 'Premium quality steel and iron fasteners',
      image: '/images/bl.jpg',
      fallbacks: ['/images/bl.jpg'],
      placeholder: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=800&fit=crop&auto=format',
      category: 'products',
    },
    {
      id: 3,
      title: 'Scrap Metal Collection',
      description: 'Efficient scrap metal processing and recycling services',
      image: '/images/scrap-metal.jpg',
      fallbacks: [],
      placeholder: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop&auto=format',
      category: 'products',
    },
    {
      id: 4,
      title: 'Manufacturing Facility',
      description: 'State-of-the-art industrial workshop',
      image: '/images/industries-workshop.png',
      fallbacks: ['/images/workshop.jpg'],
      placeholder: 'https://images.unsplash.com/photo-1581091877018-df6b7ef56f79?w=1200&h=800&fit=crop&auto=format',
      category: 'facility',
    },
    {
      id: 5,
      title: 'GK Industries Building',
      description: 'Our main facility in Ludhiana',
      image: '/images/building.jpg.png',
      fallbacks: ['/images/building.jpg'],
      placeholder: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&auto=format',
      category: 'facility',
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title" data-aos="fade-up">
            Our Gallery
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Explore our facilities, products, and services through our image gallery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="aspect-[16/10] bg-steel-200 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    const fallbacks = item.fallbacks || []
                    const currentSrc = target.src
                    const imagePaths = [item.image, ...fallbacks]
                    const currentIndex = imagePaths.findIndex(src => src && currentSrc.includes(src.split('/').pop() || ''))
                    
                    if (currentIndex >= 0 && currentIndex < fallbacks.length) {
                      // Try next fallback
                      target.src = fallbacks[currentIndex]
                    } else if (item.placeholder) {
                      // Use placeholder image from internet
                      target.src = item.placeholder
                    } else {
                      // Show custom placeholder
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-400 to-steel-500">
                            <div class="text-center text-white">
                              <svg class="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <p class="text-sm">${item.title}</p>
                            </div>
                          </div>
                        `
                      }
                    }
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
