import React from 'react'
import useStorage from './useStorage'
function App() {
  const [content, setcontent] = useStorage('content', '')
  return (
    <div>
      <input type='text' value={content} onChange={e=> setcontent(e.target.value)}></input>
    </div>
  )
}

export default App