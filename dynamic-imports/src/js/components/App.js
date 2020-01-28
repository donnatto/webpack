import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'

import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'

console.log(data)
function App() {
  const [loaderList, setLoaderList] = useState([])

  async function handleClick() {
    setLoaderList(data.loaders)
    const { alerta } = await import('./alert')
    alerta('Este modulo ha cargado dinamicamente')
  }

  return (
    <div>
      <p className="sass">esto es sass</p>
      <p className="less">esto es less</p>
      <p className="stylus">esto es stylus</p>
      <p className="post-css">esto es postcss</p>
      App Developed in React.js
      <ul>
        {
          loaderList.map(item => <Loader {...item} key={item.id} />)
        }
      </ul>
      <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
    </div>
  )
}

export default App
