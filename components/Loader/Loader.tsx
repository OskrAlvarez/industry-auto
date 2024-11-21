import './Loader.css'
export default function Loader({message}: {message: string}) {
  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
      <span className="loader"></span>
      <p className='font-bold text-lg'>{message}</p>
    </div>
  )
}