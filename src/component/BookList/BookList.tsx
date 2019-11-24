import React from 'react'
import {BookTile} from '../BookTile/BookTile'

export const BookList =({})=>{
    const array =[1,2,3,4,5,6,7,8,9,10]
    return (
   
<div>
{array.map((id)=>{return<BookTile id={id}/>})}
</div>)}
