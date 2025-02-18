import React from 'react'

export default function ProductTab({title, name}) {
  return (
    <div className="content">
        {title == 'BRAND' && 
                    <>
                    <div id="brand-info" class="tabcontent">
                    <h3>{name}</h3>
                    <p>Brand is where the heart is..</p>
                    </div>
                    </>}

                    {title == 'DESC' && 
                    <>
                    <div id="prod-desc" class="tabcontent">
                    <h3>Description</h3>
                    <p>Delight Your Senses With {name}</p>
                    </div>
                    </>}
    </div>
  )
}
