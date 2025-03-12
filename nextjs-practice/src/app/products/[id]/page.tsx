import React from 'react'
// This [id] is written to make a route dynamic , now we can access this component like "/products/2", "/products/macbook"
export default async function Product({params}:{params:{id:string}}) {
    const {id} = await params;
  return (
    <div>Product id  : {id}</div>
  )
}

