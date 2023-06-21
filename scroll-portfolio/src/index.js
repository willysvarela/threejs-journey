import * as THREE from 'three';
import { Pane } from 'tweakpane';

const scene = new THREE.Scene();

let sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

const aspectRatio =  sizes.width / sizes.height;

// Perspective Camera
const camera = new THREE.PerspectiveCamera(50, aspectRatio, 0.1, 5000);
const cameraGroup = new THREE.Group();
scene.add(cameraGroup);
cameraGroup.add(camera);
camera.position.z = 4;
camera.lookAt(new THREE.Vector3(0, 0, 0));

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas'),
    alpha: true
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//renderer.shadowMap.enabled = true;

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

const light = new THREE.AmbientLight('#ffffff', 1);
scene.add(light);

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(),
    new THREE.MeshToonMaterial({ color: '#eeeeee' })
);

scene.add(torus);

const other = new THREE.Mesh(
    new THREE.TorusKnotGeometry(),
    new THREE.MeshToonMaterial({ color: '#ff0000' })
);

scene.add(other);

torus.position.y = distance * 0;
torus.position.x = 1.5;
other.position.y = distance * - 1;
other.position.x = -1.5;


const meshes = [torus, other];

window.addEventListener('scroll', (event) => {
    camera.position.y = window.scrollY / sizes.height * distance * -1; 
});

let cursor = {x: 0, y: 0};
window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = event.clientY / sizes.height - 0.5;
});

const particlesGeometry = new THREE.BufferGeometry();
const particlesMaterial = new THREE.PointsMaterial({ color: '#ffffff', size: 0.02, sizeAttenuation: true});
const points = new THREE.Points(particlesGeometry, particlesMaterial);
const positions = new Float32Array(1000 * 3);

for (let i=0;i<1000;i++) {
    const index = i * 3;
    positions[index] = (Math.random() - 0.5) * 10;
    positions[index + 1] = - (Math.random() * distance * 3) + distance * 0.5; // distance * 0.5 - (Math.random() * distance * 3)
    positions[index + 2] = (Math.random() - 0.5) * 5;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
scene.add(points);

const clock = new THREE.Clock();
let previousTime = 0;

const update = () => {

    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;

    const parallaxX = cursor.x;
    const parallaxY = - cursor.y;

    cameraGroup.position.x = cameraGroup.position.x + (parallaxX - cameraGroup.position.x) * 2 * deltaTime;
    cameraGroup.position.y = cameraGroup.position.y + (parallaxY - cameraGroup.position.y) * 2 * deltaTime;
    renderer.render(scene, camera);
    window.requestAnimationFrame(update);

    meshes.forEach(mesh => {
        mesh.rotateX(0.01);
        mesh.rotateZ(0.01);
    });
}

update();