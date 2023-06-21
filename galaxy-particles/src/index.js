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
camera.position.z = 4;
camera.position.x = 3;
camera.position.y = 3;

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas')
});

const controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(sizes.width, sizes.height);
renderer.shadowMap.enabled = true;

// Using Debug UI

const pane = new Pane();

const parameters = {
    count: 100000,
    size: 0.01,
    radius: 4,
    branches: 3,
    spin: 1,
    randomness: 0.2,
    randomnessPower: 2.4,
    outsideColor: '#ff0044',
    insideColor: '#00ff44'
};

let geometryMaterial;
let geometry;
    
let points;
let positions;



const generateGalaxy = () => {
    let colorInside = new THREE.Color(parameters.insideColor);
    let colorOutside = new THREE.Color(parameters.outsideColor);
    const colors = new Float32Array(parameters.count * 3);

    if(positions) {
        geometry.dispose();
        geometryMaterial.dispose()
        scene.remove(points);
    }
    geometryMaterial = new THREE.PointsMaterial({ size: parameters.size, sizeAttenuation: true, depthWrite: false, blending: THREE.AdditiveBlending, vertexColors: true });
    geometry = new THREE.BufferGeometry();
    positions = new Float32Array(parameters.count * 3);

    


    points = new THREE.Points(geometry, geometryMaterial);

    for(let i=0;i<parameters.count;i++) {
        const i3 = i * 3;
        const radius = Math.random() * parameters.radius;
        const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2;

        const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1);
        const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1);
        const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1);

        const spinAngle = radius * parameters.spin;
        positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
        positions[i3+1] = 0 + randomY;
        positions[i3+2] = (Math.sin(branchAngle + spinAngle) * radius + randomZ);

        const mixedColor = colorInside.clone();

        mixedColor.lerp(colorOutside, radius / parameters.radius);

        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    scene.add(points);
}
const onUpdateDebugUI = e => e.last && generateGalaxy();

pane.addInput(parameters, 'count', {
    step: 1,
    min: 100,
    max: 100000
}).on('change', onUpdateDebugUI);

pane.addInput(parameters, 'size', {
    min: 0.001,
    max: 2
}).on('change', onUpdateDebugUI);

pane.addInput(parameters, 'radius', {
    min: 0.01,
    max: 20
}).on('change', onUpdateDebugUI);

pane.addInput(parameters, 'branches', {
    step: 1,
    min: 3,
    max: 5
}).on('change', onUpdateDebugUI);

pane.addInput(parameters, 'spin', {
    min: -5,
    max: 5
}).on('change', onUpdateDebugUI);

pane.addInput(parameters, 'randomness', {
    min: -5,
    max: 5
}).on('change', onUpdateDebugUI);

pane.addInput(parameters, 'randomnessPower', {
    min: -5,
    max: 5
}).on('change', onUpdateDebugUI);

pane.addInput(parameters, 'insideColor').on('change', onUpdateDebugUI);

pane.addInput(parameters, 'outsideColor').on('change', onUpdateDebugUI);

generateGalaxy();

let time = 1;

const update = () => {
    time++;
    geometry.rotateY(0.001);
    renderer.render(scene, camera);
    window.requestAnimationFrame(update);
}

update();