interface IService {
  name: string
  description: string
  tagline: string
  imageSrc: string
}

export default function Block({
  name,
  tagline,
  description,
  imageSrc
}: IService) {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <div className='service'>
      <div className='max-desktop:h-[200px] h-[300px] overflow-hidden'>
        <img
          src={baseUrl + imageSrc}
          alt={name}
          className='size-full object-cover'
        />
      </div>

      <div className='max-desktop:p-4 flex flex-col gap-4 p-8'>
        <h1 className='max-desktop:text-2xl text-4xl font-bold'>{name}</h1>

        <div className='flex flex-col gap-2'>
          <h4 className='italic'>{tagline}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
