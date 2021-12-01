import './App.css';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, SpotLight, Stars } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';


const Box = () => {
  const [boxRef, api] = useBox(() => ({mass:1}));
  return(
    <mesh onClick={() => {
      api.velocity.set(Math.random(),4,Math.random())
    }} ref={boxRef} position={[0, 5, 0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="pink"/>
    </mesh>
  );
}

const Plane = () => {
  const [planeRef] = usePlane(() => ({ rotation: [-Math.PI / 2,0,0], }));
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2,0,0]} >
      <planeBufferGeometry attach='geometry' args={[100,100]}/>
      <meshLambertMaterial attach='material' color='gold' />
    </mesh>
  );
}

function App() {
  return (
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <SpotLight position={[-1,4,1]} angle={0.4} />
        <SpotLight position={[-3,2,-2]} angle={0.6} />
       <Html
          as='div' // Wrapping element (default: 'div')
          center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
          >
            <h4 style={{color:'blue' }}>Box</h4>
        </Html> 
        <Physics>
        <Box />
        <Plane />
        </Physics>
      </Canvas>
  );
}

export default App;
