import * as THREE from 'three';
import gsap from 'gsap';
 

const scene = new THREE.Scene();

const sizes = {
    width: 400,
    height: 400,
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 2;

scene.add(camera);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas')
});

const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xEB7AD7 }));
scene.add(cube);

renderer.setSize(sizes.width, sizes.height);

/*
let time = Date.now(); 

const tick = () => {

    //get the current timestamp
    const currentTime = Date.now();
    const deltaTime = currentTime - time;
    time = currentTime;

    cube.rotation.x += 0.001 * deltaTime;
    cube.rotation.y += 0.001 * deltaTime;

    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
}
tick();
*/

const clock = new THREE.Clock();

const tick = () => {

    //Get the seconds passed since the clock started.
    const elapsedTime = clock.getElapsedTime();
    console.log({elapsedTime})

    cube.position.x = Math.sin(elapsedTime) / 2;
    cube.position.y = Math.cos(elapsedTime) / 2;

    
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}
//Animation with GSAP lib
/* 
const tick = () => {
     renderer.render(scene, camera);
     window.requestAnimationFrame(tick);
 }
gsap.to(cube.position, {duration: 1, delay: 1, x: 2});
*/
tick();

