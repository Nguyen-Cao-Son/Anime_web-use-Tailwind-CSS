import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import requets from '../Request'

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowId='1' title='Up Coming' fetchURL={requets.requestUpcoming}/>
        <Row rowId='2' title='Top Rate' fetchURL={requets.requestTopRate}/>
        <Row rowId='3' title='Popular' fetchURL={requets.requestPopular}/>
        <Row rowId='4' title='Now playing' fetchURL={requets.requestNowPlaying}/>
    </div>
  )
}

export default Home