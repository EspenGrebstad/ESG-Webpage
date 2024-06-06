import React from 'react'
import { useState, useEffect } from 'react'

const MemeGenerator = () => {
    const [meme, setMeme] = useState([null])
    const [loading, setLoading] = useState(true)

    const fetchMeme = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://meme-api.com/gimme')
            const data = await response.json()
            setMeme(data)
        } catch (error) {
            console.log('Error fetching meme: ', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMeme()
    }, [])

  return (
    <div>
      <h1>Meme Generator</h1>
       {loading ? (
        <p>Loading...</p>
    ) : (
        meme && (
            <div>
                <h2>{meme.title}</h2>
                <img src={meme.url} alt={meme.title} style={{ maxWidth: '100%', height: 'auto' }}/>
            </div>
        )
    )}
    <button onClick={fetchMeme}>Get Another Meme</button>
    </div>
  )
}

export default MemeGenerator
