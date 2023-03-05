import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { QueryCache, useQuery } from 'react-query';
import type { NextPage } from 'next';


interface Post {
    id: number;
    title: string;
    body: string;
  }

  interface QueryError {
    message: string;
  }

const QUERY_KEY = 'https://api.artic.edu/api/v1/artworks';


const basicrq = () => {
    const { isLoading, error, data } = useQuery<Post[]>(QUERY_KEY, async () => {
        const response = await fetch(QUERY_KEY);
        return response.json();
      });

      if (isLoading) return <div>Loading...</div>;
      if (error){
        const QuerryError = error as QueryError
        return <div>Error: {QuerryError.message}</div>;
      } 

  return (
    <section>
        <Navbar/>
        <div>
        <ul>
        {data?.map((post) => (
            <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </li>
        ))}
        </ul>
        </div>
        <Footer/>
    </section>
  )
}

export default basicrq