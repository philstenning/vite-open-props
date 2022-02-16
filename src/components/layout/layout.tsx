import React from 'react'
import {Outlet} from 'react-router-dom'

// components
const pages = import.meta.globEager("../../routes/*.tsx");
import {Footer,Header} from '../index'

export default function Layout() {

 
  return (
    <div>
      <Header />
      <main>
        {/* {JSON.stringify(pages)} */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
