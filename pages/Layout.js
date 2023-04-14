import React from 'react';
import Navbar from "@/Componets/Navbar/Navbar";
const Layout = ({children}) => {
    return (
      <main className={'Wrapper'}>
       <div className={'container'}>
       <Navbar/>
           {children}
       </div>
      </main>
    );
};

export default Layout;
