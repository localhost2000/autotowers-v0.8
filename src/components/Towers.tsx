const towers = [
  {
    name: 'Isuzu Metro 4',
    imageSrc: '/towers/autolift.jpg',
    height: 60
  },
  {
    name: 'UAZ Compiler',
    imageSrc: '/towers/tower-17.jpg',
    height: 17
  },
  {
    name: 'Volkswagen Tar',
    imageSrc: '/towers/tower-22.jpg',
    height: 22
  },
  {
    name: 'Автовышка',
    imageSrc: '/towers/tower-26.jpg',
    height: 26
  },
  {
    name: 'Автовышка',
    imageSrc: '/towers/tower-28.jpg',
    height: 28
  },
  {
    name: 'Автовышка',
    imageSrc: '/towers/tower-40.jpg',
    height: 40
  }
  // {
  //   name: 'Автовышка',
  //   imageSrc: '/towers/tower-45.jpg',
  //   height: 45
  // }
]

export default function Towers() {
  const baseUrl = import.meta.env.BASE_URL
  return (
    <div className='p-8'>
      <div className='flex justify-between gap-4'>
        <button className='animation rounded-2xl bg-[#141414] px-4 font-bold text-white shadow-lg shadow-black/40'>
          L
        </button>

        <div className='grid w-full grid-cols-6 gap-4 rounded-2xl'>
          {towers.map((tower, index) => (
            <div className='flex flex-col items-center justify-center gap-0 overflow-hidden'>
              <img
                key={index}
                src={baseUrl + tower.imageSrc}
                alt={tower.name}
                className='aspect-square size-full scale-120 object-contain'
              />
              <span className='font-bold'>{tower.height}м</span>
            </div>
          ))}
        </div>

        <button className='animation rounded-2xl bg-[#141414] px-4 font-bold text-white shadow-lg shadow-black/40'>
          R
        </button>
      </div>
    </div>
  )
}
