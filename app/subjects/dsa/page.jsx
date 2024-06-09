import Image from "next/image";
import { Container } from "/components/container";
import Link from "next/link"
const products = [
    
  {
    id: 1,
    name: 'Anonymous',
    href: '#',
    topic: 'Basic Structure',
    imageSrc: 'https://images.unsplash.com/photo-1642952469120-eed4b65104be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    to: 'https://www.linkedin.com/in/ninadvyas/'
  },
  ]
  
  export default function Example() {
    return (
        <Container>
      <div className="bg-black">
       
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className=' w-20 mb-10 flex justify-center rounded-full border border-gray-600'> 
      <Link href='/resource' className='font-semibold text-white text-md'> ⇠ back</Link>
      </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div>
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <p className="mt-1 text-lg font-medium text-white">{product.topic}</p>
              </a>
              <a key={product.id} href={product.to} className="group">
                <h3 className=" text-sm text-gray-500 hover:text-emerald-500">{product.name}</h3>
                </a>
                </div>
            ))}
          </div>
        </div>
      </div>
      </Container>

    )
  }
  
 