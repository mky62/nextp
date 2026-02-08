import Image from 'next/image'
import { products } from '../utils/productsdata'
import ProductList from '../components/ProductList'

const Homepage = () => {
  return (
    <div className='p-4'>
      {/* Featured Banner */}
      <div className='relative h-[220px] md:h-[350px] w-full max-w-7xl mx-auto mb-8'>
        <Image
          src="/featured.jpg"
          alt="Featured"
          fill
          className='rounded-xl object-cover'
          priority
        />
      </div>

      <ProductList products={products} />
    </div>

  )
}

export default Homepage