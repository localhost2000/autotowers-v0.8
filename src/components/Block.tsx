interface IBlock {
  heading: string
  imageSrc: string
  imageAlt: string
  imagePosition?: 'right' | 'left'
  children: React.ReactNode
}

export default function Block({
  heading,
  imageSrc,
  imageAlt,
  imagePosition = 'left',
  children
}: IBlock) {
  return (
    <div
      className={`flex w-full gap-6 p-8 ${imagePosition === 'right' && 'flex-row-reverse'}`}
    >
      <div className='min-h-[400px] min-w-1/2 overflow-hidden rounded-2xl'>
        <img
          src={imageSrc}
          alt={imageAlt}
          className='size-full bg-gray-400 object-cover object-bottom opacity-20'
        />
      </div>
      <div className='flex flex-col justify-end gap-4'>
        <h1
          className={`text-8xl font-bold ${imagePosition === 'left' && 'text-right'}`}
        >
          {heading}
        </h1>
        <p className='text-lg'>{children}</p>
      </div>
    </div>
  )
}
