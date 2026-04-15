export default function Banner() {
  return (
    <div className='section'>
      <div className='relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl text-white shadow-lg shadow-black/15'>
        <img
          src={`${import.meta.env.BASE_URL}/services/snow.jpg`}
          alt=''
          className='absolute -z-10 size-full object-cover blur-[2px] brightness-50'
        />
        <div className='flex flex-col gap-2 text-center'>
          <h4 className='text-4xl font-bold'>Автовышки от 12 до 45 метров</h4>
          <span className='text-xl'>
            Современный автопарк для любых задач на высоте
          </span>
        </div>
      </div>
    </div>
  )
}
