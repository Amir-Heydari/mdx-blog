import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'MDX next app',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className='uppercase flex justify-evenly my-7 border-b-2 border-black shadow-lg pb-3 '>
            <Link className='hover:bg-gray-100 rounded-md p-2' href={"/"}>HOME</Link>
            <Link className='hover:bg-gray-100 rounded-md p-2' href={'/product'}>Product</Link>
            <Link className='hover:bg-gray-100 rounded-md p-2' href={"service"}>Services</Link>
            <Link className='hover:bg-gray-100 rounded-md p-2' href={'/blog'}>Blog</Link>
        </div>
        { children }
        </body>
    </html>
  )
}
