import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import requets from '../Request'

const Home = () => {
  return (
    <div>
        <Main />
        <Row title='Up Coming' fetchURL={requets.requestUpcoming}/>
        <Row title='Top Rate' fetchURL={requets.requestTopRate}/>
        <Row title='Popular' fetchURL={requets.requestPopular}/>
        <Row title='Now playing' fetchURL={requets.requestNowPlaying}/>
    </div>
  )
}

export default Home