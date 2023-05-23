import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FlyControls } from 'three/addons/controls/FlyControls.js';
const clock = new THREE.Clock();

let cursor = {
    x: 0,
    y: 0
}
window.addEventListener("mousemove", (e) => {
    // -0.5 <- Allow to get a world coordination from negative to positive.
    cursor.x = e.clientX / sizes.width - 0.5;
    cursor.y = e.clientY / sizes.height - 0.5;
});

window.addEventListener("resize", e => {
    sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

window.addEventListener("dblclick", (e) => {
    if(!document.fullscreenElement) {
        document.querySelector('canvas').requestFullscreen();
        return;
    }
    document.exitFullscreen();
});

const scene = new THREE.Scene();


let sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};


const aspectRatio =  sizes.width / sizes.height
console.info({aspectRatio})
// Perspective Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 50);


// Ortographic Camera
//const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1);
//const camera = new THREE.OrthographicCamera(-aspectRatio* sizes.width / 2, aspectRatio * sizes.width / 2, sizes.height / 2, -sizes.height / 2);

camera.position.z = 2;
camera.position.y = 2;


scene.add(camera);

const sunMaterial = new THREE.MeshBasicMaterial({color: 0xffff00});
const genericPlanetMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
const moonMaterial = new THREE.MeshBasicMaterial({color: 0xffffee});

const sun = new THREE.Mesh(new THREE.SphereGeometry(0.5), sunMaterial);

const otherCube = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), genericPlanetMaterial);

const secondPlanetGroup = new THREE.Group();
const secondPlanet = new THREE.Mesh(new THREE.SphereGeometry(0.2), genericPlanetMaterial);
const moon = new THREE.Mesh(new THREE.SphereGeometry(0.05), moonMaterial);
secondPlanetGroup.add(secondPlanet);
secondPlanetGroup.add(moon);
scene.add(secondPlanetGroup);


sun.rotation.x = 3;

camera.lookAt(sun.position);


scene.add(sun);
scene.add(otherCube);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas')
});

//OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
//controls.enabled = false;
//FlyControls
//const controls = new FlyControls(camera, renderer.domElement);
//controls.enableDamping = true;

renderer.setSize(sizes.width, sizes.height);

const update = () => {
    const elapsedTime = clock.getElapsedTime();
    
    //const value = 
    controls.update();
    sun.rotation.y += 0.01;
    sun.rotation.z += 0.01;

    otherCube.position.x = Math.sin(elapsedTime / 2);
    otherCube.position.z = Math.cos(elapsedTime / 2);

    console.log(elapsedTime, Math.sin(elapsedTime));

    const PLANET_DISTANCE = 2;
    secondPlanetGroup.position.x = Math.sin(elapsedTime) * PLANET_DISTANCE;
    secondPlanetGroup.position.z = Math.cos(elapsedTime) * PLANET_DISTANCE;

    const MOON_VELOCITY = 12;
    const MOON_DISTANCE = 0.38
    moon.position.x = Math.sin(elapsedTime * MOON_VELOCITY) * MOON_DISTANCE;
    moon.position.z = Math.cos(elapsedTime * MOON_VELOCITY) * MOON_DISTANCE;

    renderer.render(scene, camera);

    window.requestAnimationFrame(update);
}

update();
