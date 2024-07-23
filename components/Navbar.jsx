import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=" backdrop-blur-[3px] h-20 w-full border-b-2 flex items-center justify-between p-2">
      <ul className="flex">
        <li className="p-2 cusor-pointerm text-white">
           <Link href="/" className='text-stroke-3'>Home</Link> 
        </li>
        <li className="p-2 cusor-pointerm text-white">
          <Link href="/about" className='text-stroke-3'>about</Link>
        </li>
        <li className="p-2 cusor-pointerm text-white">
          <Link href="/profile" className='text-stroke-3'>Profile</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar