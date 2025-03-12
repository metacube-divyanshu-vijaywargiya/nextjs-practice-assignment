//this is to create a custom layout for product page . now this layout will also applied along with the root layout 
import React from 'react'

export default function layout({children} : {children : React.ReactNode}) {
  return (
    <div>
        {children}
        {/*Like here we want to show more suggested products*/}
        <div className='text-center'>
            <h2>More Featured Products</h2>
        </div>
    </div>
  )
}
