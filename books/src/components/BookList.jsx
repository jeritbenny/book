import React from 'react'
import '../App.css'
import axios from 'axios'
import { API_URL } from '../API'
import { useEffect, useState } from 'react'


export const BookList = () => {
    const[books,setBooks]= useState([]);
useEffect(()=>{
    axios.get(API_URL).then(res=>{
        console.log(res.data);
        setBooks(res.data.books);
})
.catch(err=>console.log(err))
},[])

  return  <div className='book-list'>
         {
       books.map((book)=>(
        <div key={book.isbn13}>
       <div className='img'><img src={book.image} alt="#" /></div>
       <div className='titl'>{book.title}</div>
       <div className='price'>{book.price}</div>
       <button className='btn'>Add to Favorite</button>
       
      

        </div>
        ))
        } 
    </div>
  
}
export default BookList
