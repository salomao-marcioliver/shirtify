import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import tecnologyImage from '../assets/tecnology.png';

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const Background = () => {
  const texture = useLoader(TextureLoader, tecnologyImage);

  return (
    <mesh position={[0, 0, -10]}>
      <planeGeometry args={[14, 7.84]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 25 }} // fov = field of view
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={1} />
      {/* <Environment preset="forest" background /> */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-5, 5, 5]} intensity={0.7} />
      <spotLight
        position={[0, 10, 0]}
        intensity={0.9}
        angle={0.3}
        penumbra={0.5}
        castShadow
      />
      <Background />
      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
