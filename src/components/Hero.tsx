export default function Hero() {
  return (
    <div className='flex items-center gap-4 p-8'>
      <h1 className='text-8xl font-bold uppercase'>вышки про</h1>
      <div className='flex flex-col items-end gap-2'>
        <div className='flex gap-4'>
          {Array.from({ length: 4 }).map((_, index) => (
            <img
              key={index}
              src=''
              alt=''
              className='size-20 rounded-2xl bg-gray-400 opacity-20'
            />
          ))}
        </div>
        <p className='text-right text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aut
          minus optio rem itaque. Harum unde consequuntur consectetur! Eaque
          cupiditate sapiente soluta facilis obcaecati dolorem maiores! Ipsam at
          rem alias?
        </p>
      </div>
    </div>
  )
}
