export default function MiniBanner() {
  return (
    <div className='min-desktop:w-[600px] relative flex h-[300px] flex-col justify-end overflow-hidden rounded-2xl shadow-lg shadow-black/15'>
      <img
        src={`${import.meta.env.BASE_URL}/services/autotowers.jpg`}
        alt=''
        className='absolute left-0 -z-10 size-full object-cover'
      />

      <div className='min-desktop:gap-0.5 m-6 flex flex-col'>
        <h4 className='text-xl font-bold'>Профессионально</h4>
        <span>Работаем на высоте</span>
      </div>
    </div>
  )
}
