import { AddContentForm } from '@/components/AddContentForm'

const AddContent = () => {
  return (
    <div className='w-full md:px-36 py-10 min-h-[750px] bg-[#171717]  rounded-md flex flex-col '>
      <h1 className='text-center text-white py-4 text-4xl font-5xl font-bold'>Add Your <span className='text-[#594EF1]'>content</span></h1>
      <AddContentForm />
    </div>
  )
}

export default AddContent; 