import Head from 'next/head'
import { useState, useCallback, useMemo } from 'react'
import Title from '../components/Title'
import Count from '../components/Count'
import Button from '../components/Button'

const Home = () => {
  const [height, setHeight] = useState(160)
  const [weight, setWeight] = useState(50)

  const incrementHeight = useCallback(() => setHeight(height + 1))
  const incrementWeight = useCallback(() => setWeight(weight + 1))

  const isEven = useMemo(() => {
    console.log('身長')
    return height % 2 === 0
  }, [height])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title text="title" />
        <Count text="身長" count={height} />
        <Count text="体重" count={weight} />
        <Button handleClick={incrementHeight}>身長+1</Button>
        <Button handleClick={incrementWeight}>体重+1</Button>
      </main>
    </div>
  )
}

export default Home
