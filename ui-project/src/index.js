import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { Pane } from 'tweakpane';
import { Mesh, PlaneGeometry, SpotLight, SpotLightHelper } from 'three';

const scene = new THREE.Scene();

let sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

const aspectRatio =  sizes.width / sizes.height;

// Perspective Camera
const camera = new THREE.PerspectiveCamera(50, aspectRatio, 0.1, 5000);

scene.add(camera);
camera.lookAt(new THREE.Vector3(0, 0, 0));
camera.position.z = 5;
camera.position.x = 0;

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas')
});

const controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(sizes.width, sizes.height);
renderer.shadowMap.enabled = true;

// Using Debug UI

const pane = new Pane();
const PARAMS = {
    width: 1,
    height: 1
}




// Font 3D

const fontLoader = new FontLoader();

fontLoader.load(
    './helvetiker_bold.typeface.json',
    (font) => {
        console.log('Font loaded');
        const textGeometry = new  TextGeometry('Hi my friend', {
            font: font,
            size: 0.5,
            height: 0.2
        });
        const matCap = new THREE.TextureLoader().load('./material.png');
        const textMaterial = new THREE.MeshMatcapMaterial({matcap: matCap});

        const text = new THREE.Mesh(textGeometry, textMaterial);
        textGeometry.computeBoundingBox();
        console.log({boundingBox: textGeometry.boundingBox});

        // textGeometry.translate(
        //     - textGeometry.boundingBox.max.x * 0.5,
        //     - textGeometry.boundingBox.max.y * 0.5,
        //     - textGeometry.boundingBox.max.z * 0.5
        // )
        textGeometry.center();

        

        scene.add(text);
    }
);
const cube = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.08) ,new THREE.MeshStandardMaterial({color: 0xffffff}));
cube.position.y = 0.5;
cube.castShadow = true;
scene.add(cube);

const floorMaterial = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide});
const floor = new Mesh(new PlaneGeometry(4, 4), floorMaterial);
floor.position.y = -0.5;
floor.rotateX(Math.PI / 2);
floor.receiveShadow = true;
scene.add(floor);


//Lights

//AmbientLight: Light every objects equally.
const ambientLight = new THREE.AmbientLight('#ffffff', 0.01);
scene.add(ambientLight);

//Directional: Directly Up to down, do not affect sides, only down and sides if the light is moved.
const directionalLight = new THREE.DirectionalLight('#5c27d2', 0.5);
const directionalHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
// scene.add(directionalLight);
// scene.add(directionalHelper);

// Hemisphere Light: Above the scene, color sky to ground

const hemisphereLight = new THREE.HemisphereLight('#5c27d2', '#2b04a1', 1);
const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 1);

scene.add(hemisphereLightHelper);
scene.add(hemisphereLight);

const pointLight1 = new THREE.PointLight("#ffffff", 0.2);
pointLight1.position.z = 1;
pointLight1.position.y = 2;
pointLight1.castShadow = true;
pointLight1.shadow.mapSize.width = 1024;
pointLight1.shadow.mapSize.height = 1024;
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight('#9f66fb', 0.5);
pointLight2.position.z = -1;
pointLight2.position.y = 2;
pointLight2.castShadow = true;
scene.add(pointLight2);

const pointLight3 = new THREE.PointLight("#427FBC", 0.5);
pointLight3.position.y = 1;
// scene.add(pointLight3);

//Spotlight
const spotLight = new THREE.SpotLight(0x78ff00, 0.5, 10, Math.PI * 2, 0.1, 0.5)
spotLight.position.set(0, 2, 3);
const spotHelper = new SpotLightHelper(spotLight);
spotLight.position.y = 1;
spotLight.position.x = 1;
spotLight.position.z = 1;

//scene.add(spotLight);
//scene.add(spotHelper);


let time = 1;

const update = () => {
    time++;
    controls.update();

    // cube.scale.x = PARAMS.width;
    // cube.scale.y = PARAMS.height;
    cube.rotateX(Math.PI * 0.005);
    cube.rotateY(Math.PI * 0.005);
    pointLight1.position.x = Math.sin(time * 0.01) * -1;
    pointLight2.position.x = Math.sin(time * 0.01);
    pointLight3.position.x = Math.sin(time * 0.01);
    pointLight3.position.z = Math.cos(time * 0.01);

    renderer.render(scene, camera);
    window.requestAnimationFrame(update);
}

update();