import React from 'react'

export default function ProgressBar({value}) {
  return (
    <div style={{position: 'fixed', left: '0', top:-7, width: '100%'}}>
        <progress value={value} style={{width: '100%'}}/>
    </div>
  )
}
