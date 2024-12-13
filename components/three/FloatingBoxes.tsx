"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import * as THREE from "three";

export function FloatingBoxes() {
  const boxes = useRef(
    [...Array(5)].map(() => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      scale: 0.5 + Math.random() * 0.5,
    }))
  );

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    boxes.current.forEach((box, i) => {
      box.position[1] = Math.sin(time * 0.5 + i * Math.PI * 0.5) * 0.5;
      box.rotation[0] += 0.01;
      box.rotation[1] += 0.01;
    });
  });

  return (
    <>
      {boxes.current.map((box, i) => (
        <Box
          key={i}
          args={[1, 1, 1]}
          position={box.position}
          scale={box.scale}
          visible={undefined}
          attach={undefined}
          onUpdate={undefined}
          up={undefined}
          rotation={undefined}
          matrix={undefined}
          quaternion={undefined}
          layers={undefined}
          dispose={undefined}
          type={undefined}
          id={undefined}
          uuid={undefined}
          name={undefined}
          parent={undefined}
          modelViewMatrix={undefined}
          normalMatrix={undefined}
          matrixWorld={undefined}
          matrixAutoUpdate={undefined}
          matrixWorldAutoUpdate={undefined}
          matrixWorldNeedsUpdate={undefined}
          castShadow={undefined}
          receiveShadow={undefined}
          frustumCulled={undefined}
          renderOrder={undefined}
          animations={undefined}
          userData={undefined}
          customDepthMaterial={undefined}
          customDistanceMaterial={undefined}
          isObject3D={undefined}
          onBeforeRender={undefined}
          onAfterRender={undefined}
          applyMatrix4={undefined}
          applyQuaternion={undefined}
          setRotationFromAxisAngle={undefined}
          setRotationFromEuler={undefined}
          setRotationFromMatrix={undefined}
          setRotationFromQuaternion={undefined}
          rotateOnAxis={undefined}
          rotateOnWorldAxis={undefined}
          rotateX={undefined}
          rotateY={undefined}
          rotateZ={undefined}
          translateOnAxis={undefined}
          translateX={undefined}
          translateY={undefined}
          translateZ={undefined}
          localToWorld={undefined}
          worldToLocal={undefined}
          lookAt={undefined}
          add={undefined}
          remove={undefined}
          removeFromParent={undefined}
          clear={undefined}
          getObjectById={undefined}
          getObjectByName={undefined}
          getObjectByProperty={undefined}
          getObjectsByProperty={undefined}
          getWorldPosition={undefined}
          getWorldQuaternion={undefined}
          getWorldScale={undefined}
          getWorldDirection={undefined}
          raycast={undefined}
          traverse={undefined}
          traverseVisible={undefined}
          traverseAncestors={undefined}
          updateMatrix={undefined}
          updateMatrixWorld={undefined}
          updateWorldMatrix={undefined}
          toJSON={undefined}
          clone={undefined}
          copy={undefined}
          addEventListener={undefined}
          hasEventListener={undefined}
          removeEventListener={undefined}
          dispatchEvent={undefined}
          onClick={undefined}
          onContextMenu={undefined}
          onDoubleClick={undefined}
          onPointerUp={undefined}
          onPointerDown={undefined}
          onPointerOver={undefined}
          onPointerOut={undefined}
          onPointerEnter={undefined}
          onPointerLeave={undefined}
          onPointerMove={undefined}
          onPointerMissed={undefined}
          onPointerCancel={undefined}
          onWheel={undefined}
          material={undefined}
          geometry={undefined}
          morphTargetInfluences={undefined}
          morphTargetDictionary={undefined}
          isMesh={undefined}
          updateMorphTargets={undefined}
          getVertexPosition={0}
        >
          <meshStandardMaterial
            color={new THREE.Color().setHSL(i * 0.2, 0.8, 0.5)}
            transparent
            opacity={0.6}
            metalness={0.5}
            roughness={0.2}
          />
        </Box>
      ))}
    </>
  );
}
