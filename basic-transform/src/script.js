import * as THREE from 'three';
import { Vector3 } from 'three';
import { AxesHelper } from 'three';

 const scene = new THREE.Scene();

 const geometry = new THREE.BoxGeometry(1, 1 ,1);
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
const mesh = new THREE.Mesh(geometry, material);

// Position
mesh.position.x = 0.7;
mesh.position.y = -0.6;
mesh.position.z = 1;

// Scale
mesh.scale.x = 0.1;

const axes = new AxesHelper();

// Rotation
mesh.rotation.reorder('XYZ'); //default
mesh.rotation.reorder('XYZ');
mesh.rotation.x = Math.PI / 2;
mesh.rotation.y = 2;
mesh.rotation.z = 2;

scene.add(axes);

scene.add(mesh);



const sizes = {width: 800, height: 600};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

scene.add(camera);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas')
});
renderer.setSize(sizes.width, sizes.height);

//Groups

const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xffcf6e })
);

group.add(cube1);
group.position.x = -1;

scene.add(group);

renderer.render(scene, camera);