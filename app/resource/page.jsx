import { Container } from "/components/container";
import styles from "/styles/index.module.scss";

const callouts = [
  {
    name: 'Data Strucutres & Algorith',
    description: 'Handwritten & Conceptual',
    imageSrc: 'dsa.png',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '/dsa',
  },
  {
    name: 'Computer Networks',
    description: 'Handwritten & Conceptual',
    imageSrc: 'cn.png',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Operating System',
    description: 'Handwritten & Conceptual',
    imageSrc: 'os.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Amazone Web Services',
    description: 'Handwritten & Conceptual',
    imageSrc: 'aws.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Distributed System',
    description: 'Handwritten & Conceptual',
    imageSrc: 'ds.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Information Security',
    description: 'Handwritten & Conceptual',
    imageSrc: 'is.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Machine Learning',
    description: 'Handwritten & Conceptual',
    imageSrc: 'ml.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Artificial Intelligence',
    description: 'Handwritten & Conceptual',
    imageSrc: 'ai.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Theory Of Computation',
    description: 'Handwritten & Conceptual',
    imageSrc: 'toc.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]
  

  export default function Example() {
    return (
        <Container>
        <div className={styles.heading}>
          {/* <div>Resources</div> */}
        </div>
      <div className="bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 ">
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 ">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative py-2">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-200">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-600">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      </Container>

    )
  }
  