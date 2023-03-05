import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { useEffect, useState } from 'react';
import { fetchData } from '@/pages/api/api';

type DataType = {
    id: number,
    title: string,
}
const axios = () => {

    const [data, setData] =useState<DataType[]>([])

  return (
    <section>
        <Navbar/>
        <div>
      <h1>My Next.js App</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
        <Footer/>
    </section>
  )
}

export default axios