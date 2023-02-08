import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const HeartModule = () => {
  const containerRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // const geometry = new THREE.ShapeGeometry(new THREE.Shape([
    //   new THREE.Vector2(0, 0.5),
    //   new THREE.Vector2(-0.5, 0),
    //   new THREE.Vector2(-0.25, -0.5),
    //   new THREE.Vector2(0.25, -0.5),
    //   new THREE.Vector2(0.5, 0)
    // ]));
    // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    // const mesh = new THREE.Mesh(geometry, material);
    const heartShape = new THREE.Shape();

    heartShape.moveTo( 25, 25 );
    heartShape.bezierCurveTo( 25, 25, 20, 0, 0, 0 );
    heartShape.bezierCurveTo( - 30, 0, - 30, 35, - 30, 35 );
    heartShape.bezierCurveTo( - 30, 55, - 10, 77, 25, 95 );
    heartShape.bezierCurveTo( 60, 77, 80, 55, 80, 35 );
    heartShape.bezierCurveTo( 80, 35, 80, 0, 50, 0 );
    heartShape.bezierCurveTo( 35, 0, 25, 25, 25, 25 );
    
    const extrudeSettings = { depth: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };
    
    const geometry = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );
    
    const mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial() );
    scene.add(mesh);

    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return <div ref={containerRef} />;
};

export default HeartModule;
