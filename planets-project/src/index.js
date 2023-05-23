import * as THREE from 'three';
import { Material, MeshBasicMaterial, SphereGeometry, Vector3, Clock, Group, Mesh, Color, PlaneGeometry, RingGeometry, EdgesGeometry, TubeGeometry, MeshStandardMaterial, TextureLoader } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { randFloat, randInt } from 'three/src/math/MathUtils';

const SUN_SIZE = 1;
const COUNT_PLANETS = 8;
const PLANET_NAME = 'planet';
const MOON_NAME = 'moon';
const MOON_DISTANCES = Array.from(Array(COUNT_PLANETS).keys()).map(index => randFloat(0.6, 1));
const MOON_VELOCITIES = Array.from(Array(COUNT_PLANETS).keys()).map(index => randFloat(1, 12));
const PLANET_VELOCITIES = Array.from(Array(COUNT_PLANETS).keys()).map(index => randFloat(0.2, 1));

const scene = new THREE.Scene();

let sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

const aspectRatio =  sizes.width / sizes.height;

console.info({aspectRatio})

// Perspective Camera
const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 5000);

scene.add(camera);
camera.lookAt(new Vector3(0, 0, 0));
camera.position.z = 5;
camera.position.x = 0;


const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas')
});

const controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(sizes.width, sizes.height);

const buildLight = () => {
    let light = new THREE.PointLight(0xffffff, 1, 20);
    light.position.x = 0;
    light.position.y = 0;
    scene.add(light);

    const generalLight = new THREE.AmbientLight(0xffffff, 0.01);
    scene.add(generalLight);

};
buildLight();

const texture = new TextureLoader().load('textures/sun_texture.jpg');
const sunMaterial = new MeshBasicMaterial({ color: 0xffffff, map: texture });
const sun = new THREE.Mesh(new SphereGeometry(SUN_SIZE), sunMaterial);



sun.position.x = 0;
sun.position.y = 0;
sun.position.z = 0;

scene.add(sun);

let planets = [];

const createPlanet = ({size, color, distance}, isMoon) => {
    const index = distance;
    const planetGroup = new Group();
    const planetMaterial = new MeshStandardMaterial({color: color, roughness: 1});
    const ringMaterial = new MeshBasicMaterial({color: color, side: THREE.DoubleSide});
    const planet = new Mesh(new SphereGeometry(size), planetMaterial);

    planet.name = PLANET_NAME;
    if(isMoon) {
        const moonMaterial = new MeshStandardMaterial({color: 0xffeeee});
        const moon = new Mesh(new SphereGeometry(0.1), moonMaterial);
        moon.name = MOON_NAME;
        moon.position.x = 0.6;
        planetGroup.add(moon);
        const moonRing = new Mesh(new RingGeometry(MOON_DISTANCES[index], MOON_DISTANCES[index]+0.02, 64), ringMaterial);
        moonRing.rotateX(Math.PI / 2);
        
        planetGroup.add(moonRing);
    }
    planetGroup.add(planet);

    planetGroup.distance = SUN_SIZE * 2 + size + distance * 2;
    planetGroup.position.x = planetGroup.distance;

    const planetRing = new Mesh(new RingGeometry(planetGroup.distance, planetGroup.distance + 0.04, 128), ringMaterial);
    //planetGroup.add(planetRing);
    planetRing.rotateX(Math.PI / 2);
    scene.add(planetRing);

    return planetGroup;
}

const clock = new Clock();

const rotatePlanets = (planets) => {
    const elapsedTime = clock.getElapsedTime();
    planets.forEach((planetGroup, i) => {
        const planet = planetGroup.getObjectByName(PLANET_NAME);
        const moon = planetGroup.getObjectByName(MOON_NAME);
        if(moon) {
            moon.position.x = Math.sin(elapsedTime * MOON_VELOCITIES[i]) * MOON_DISTANCES[i];
            moon.position.z = Math.cos(elapsedTime * MOON_VELOCITIES[i]) * MOON_DISTANCES[i];
            moon.rotateX(100);
            //console.log({moon})
        }
        planet.rotateY(1000);
        planetGroup.position.x = Math.sin(elapsedTime * PLANET_VELOCITIES[i]) * planetGroup.distance;
        planetGroup.position.z = Math.cos(elapsedTime * PLANET_VELOCITIES[i]) * planetGroup.distance;
    })
}

for (let i=0;i<COUNT_PLANETS;i++) {
    const color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    planets[i] = createPlanet({size: randFloat(0.4, 0.5), color: new Color(color), distance: i}, i % 2=== 0 ? true : false);
    scene.add(planets[i]);
};



const update = () => {
    
    controls.update();

    sun.rotateY(0.005);
    
    rotatePlanets(planets);

    renderer.render(scene, camera);
    window.requestAnimationFrame(update);
}

update();