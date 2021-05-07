import React from 'react'

const Count = ({ text, count }) => {
  console.log('Count Component', text)
  return (
    <p>
      {text}: {count}
    </p>
  )
}

export default React.memo(Count)
