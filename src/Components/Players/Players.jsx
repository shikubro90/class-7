import React, { useEffect, useState } from 'react'
import PlayersData from '../../FakeData/PlayersData'

const Players = () => {

    const [players, setPlayers] = useState(PlayersData)
    
    useEffect(() => {
        setPlayers(PlayersData)
    },[])

    console.log(players)
  return (
    <div>Players</div>
  )
}

export default Players
