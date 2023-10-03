// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import React from 'react';
import News_Letter from '../../public/images/newsletter.jpg'
import ParentFooter from '../pages/parentfooter';
export function App() {

  

  return (
    <div>
        
      <div className='overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 w-full h-fit'>
          <img src={News_Letter} alt='News Letter'/>
      </div>
    <ParentFooter/>
    </div>
  );
}

export default App;
