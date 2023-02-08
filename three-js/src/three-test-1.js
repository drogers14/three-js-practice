import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js";
import React from "react";
import './index.css';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls';

class ThreeModule extends React.Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    this.mount.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    var geometry2 = new THREE.TorusGeometry(10, 3, 16, 100);
    var material2 = new THREE.MeshBasicMaterial({ //change to meshStandard and remove wireframe
      color: 0x00ff00,
      wireframe: true,
    });
    const torus = new THREE.Mesh(geometry2, material2);
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(20, 20, 20);

    const AmbientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, AmbientLight);

    const lightHelper = new THREE.PointLightHelper(pointLight);
    const gridHelper = new THREE.GridHelper(200, 50);
    scene.add(lightHelper, gridHelper);

    scene.add(cube);
    scene.add(torus);
    camera.position.z = 5;

    const controls = new OrbitControls(camera, renderer.domElement);


    function addStar(){
        const geometry = new THREE.SphereGeometry(0.25);
    }

    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      torus.rotation.x += 0.01;
      torus.rotation.y +=0.005;
      torus.rotation.z += 0.01;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();
    // === THREE.JS EXAMPLE CODE END ===
  }
  render() {
     return (
        <>
        {/* <h1 className="hello">Hello world.</h1> */}
        <div ref={(ref) => (this.mount = ref)}>

        </div>
        </>
    );
  }
}

export default ThreeModule;
