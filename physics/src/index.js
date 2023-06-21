import * as THREE from 'three';
import { Pane } from 'tweakpane';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Cannon from 'cannon';
const scene = new THREE.Scene();

let sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

const aspectRatio =  sizes.width / sizes.height;

// Perspective Camera
const camera = new THREE.PerspectiveCamera(50, aspectRatio, 0.1, 5000);
camera.position.z = 10;
camera.position.y = 2;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas'),
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//renderer.shadowMap.enabled = true;
const controls = new OrbitControls(camera, renderer.domElement);

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
});

// Using Debug UI

const pane = new Pane();
const distance = 4;

const light = new THREE.AmbientLight('#ffffff', 0.5);
scene.add(light);

const pointLight = new THREE.PointLight('#ff41af', 0.9);
pointLight.position.y = 2;
pointLight.position.x = 2;
pointLight.position.z = 2;
scene.add(pointLight);

const world = new Cannon.World();
world.gravity.set(0, -9.82, 0); // m/s²

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshPhysicalMaterial({ color: '#ffffff', side: THREE.DoubleSide})
);
plane.rotateX(Math.PI / 2);
plane.position.y = -2;
scene.add(plane);

const planeBody = new Cannon.Body({
    mass: 0,
    position: new Cannon.Vec3(0, plane.position.y, 0),
    shape: new Cannon.Plane()
});
planeBody.quaternion.setFromAxisAngle(new Cannon.Vec3(1, 0, 0), (-Math.PI / 2));
world.addBody(planeBody);

const radius = 0.5;
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(radius),
    new THREE.MeshPhysicalMaterial({ color: '#eeeeee' })
);
scene.add(sphere);

const sphereBody = new Cannon.Body({
    mass: 5,
    position: new Cannon.Vec3(0, 0, 0),
    shape: new Cannon.Sphere(radius)
});
world.addBody(sphereBody);

const clock = new THREE.Clock();
let previousTime = 0;

const update = () => {
    
    //console.log(sphereBody.position);
    sphere.position.copy(sphereBody.position);
    
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;
    
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(update);

    pointLight.position.x = Math.sin(elapsedTime);
    pointLight.position.z = Math.cos(elapsedTime);
    pointLight.position.y = Math.cos(elapsedTime);

    const fixedTimeStep = 1 / 60;
    const maxSubSteps = 3;
    world.step( fixedTimeStep, deltaTime, maxSubSteps);

}

update();