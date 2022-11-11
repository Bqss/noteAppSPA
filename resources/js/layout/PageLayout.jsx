
import React ,{ useEffect , } from 'react';
import Navbar from '@/components/Navbar';
import {useDispatch , useSelector} from "react-redux";


function PageLayout({children}) {
    const theme = useSelector(state => state.theme.isDark);
    useEffect(()=>{
       document.body.classList = theme  ?   "bg-primary-dark dark" : "bg-primary-light";
    },[theme])
    
  return (
    <div className='w-11/12 mx-auto max-w-[60rem] font-nunito'>
        <Navbar/>
        {children}
    </div>
  )
}

export default PageLayout;