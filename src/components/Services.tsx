import { services } from '../data'
import Service from './Service'

export default function Services() {
  return (
    <div className='section'>
      <h1 className='my-20 text-5xl font-bold'>Услуги</h1>
      <div className='grid grid-cols-2 gap-10'>
        {services.map((service) => (
          <Service {...service} />
        ))}
      </div>
    </div>
  )
}
