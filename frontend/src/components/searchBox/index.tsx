import { MdSearch } from 'react-icons/md'

export function SearchBox() {
  return (
    <div className='flex items-center px-2 bg-white rounded w-96 h-11 ml-14 mr-8 focus-within:outline focus-within:outline-1 focus-within:outline-offset-4 focus-within:outline-red-600'>
      <MdSearch color='#323232' size={22}/>
      <input type="text" className='w-full h-full pl-2 pr-4 placeholder:text-m placeholder:text-gray-800 focus:outline-none text-black' placeholder='Digite o que deseja encontrar...' />
    </div>
  )
}