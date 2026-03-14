import React from 'react'
import * as R from "ramda";
import { useSelector } from 'react-redux';

export default function RamadaPage() {

const data= useSelector(state=> state.ramdaProducts.items)
const electronics = R.filter(
  R.propEq("electronics", "category"),
  data
);
  return (
    <div> <h2>Electronics</h2>
 <h2>Electronics</h2>

      {electronics.map(p => (
        <div key={p.id}>
          {p.name} - ${p.price}
        </div>
      ))}g
      {electronics.map(p => (
        <div key={p.id}>
          {p.name} - ${p.price}
        </div>
      ))}</div>
    
  )
}
