import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Cubes } from './components/Cubes'
import { FPV as Fpv } from './components/FPV'
import { Ground } from './components/Ground'
import { Player } from './components/Player'
import { TextureSelector } from './components/TextureSelect'

function App () {
  return (
    <>

      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Fpv />
        <Physics>
          <Cubes />
          <Ground />
          <Player />
        </Physics>
      </Canvas>
      <div className='pointer'>+</div>
      <TextureSelector />
    </>
  )
}

export default App
