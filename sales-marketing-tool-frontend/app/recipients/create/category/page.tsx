'use client'

import { Button } from 'flowbite-react';
import Title from '../../../components/Recipients/Title';
import { useRouter } from 'next/navigation'
import { useRecipients } from '@/app/context/RecipientsContext';
const Category = () => {
    const router = useRouter()
    const {category, SetCategory, name, SetName} = useRecipients();
    const handleSave = (e:any) => {
        if((!category || category.length < 1) || (!name || name.length < 1)) {
          alert('Please enter all input fields');
          return
        }
        router.push('/recipients/create/save')
    }
  return (
    <>
      <Title title="Add Some Catagory"/>
      
      <div className="grid grid-cols-2 m-10 gap-3">
          <input type="text" className='rounded col-span-2 bg-green-200' placeholder="Name the list" required onChange={(e)=>SetName(e.target.value)} value={name && name || ''} />
          <textarea className='rounded col-span-2 bg-green-200' id="comment" placeholder="Drop recipients catagory list here. **Must be comma separated values.." required rows={8} 
          value={category && category || ''}
          onChange={(e)=>SetCategory(e.target.value)}/>
          <Button onClick={()=>router.back()}>Back</Button>
          <Button  color="success" onClick={handleSave}>Save</Button>
        
      </div>

    </>
  )
}
export default Category