
import Link from 'next/link';

export default function page() {
  return (
    <div className='m-8 p-6 shadow-md font-bold'>
        <h1>ALL POSTS:</h1>
        <div className='grid grid-cols-2 gap-10 mt-5'>
        <Link href={'/blog/posts/postone'}>
        <div className='border-2 text-center'>
          <h1 className='text-xl'>post one</h1>
          <h3>English markdown</h3>
        </div>
        </Link>

        <Link href={'/blog/posts/posttwo'}>
        <div className='border-2 text-center'>
          <h1 className='text-xl'>post Two</h1>
          <h3>Persian markdown</h3>
        </div>
        </Link>

        <Link href={'/blog/posts/postthree'}>
        <div className='border-2 text-center'>
          <h1 className='text-xl'>post Three</h1>
          <h3>discription</h3>
        </div>
        </Link>

        <Link href={'/blog/posts/postfour'}>
        <div className='border-2 text-center'>
          <h1 className='text-xl'>post Four</h1>
          <h3>discription</h3>
        </div>
        </Link>
        </div>
    </div>
  )
}
