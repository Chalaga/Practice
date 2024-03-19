import { useState } from 'react'
import Card from './Card/Card'


function App() {
  const [Color, SetColor] = useState('blue')

  const handleColorChange = () => {
    SetColor(Color === 'blue' ? 'red' : 'blue')
  }


  return(
    <>
    <Card backgrcolor={Color} color='White' info='Change my color' changedcolor={handleColorChange} />
    </>
  )

}

export default App
