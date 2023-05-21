import Postone from './postone.mdx'



export const metadata = {
  title: 'Post one title',
  discription :"",
 author: 'post author',
};


export default function page() {
  return (
    <div className='m-8 p-6 shadow-md'>
        <Postone />
    </div>
  )
}
