import React from 'react'

const Title = () => {
  console.log('Title Component')
  return <h2>身長と体重の入力</h2>
}

export default React.memo(Title)
