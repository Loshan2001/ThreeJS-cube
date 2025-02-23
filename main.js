import * as THREE from 'three';


//step1
// Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');


//step2
// add the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//step3
// Create and add a cube object to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585', emmissive: '468585' });

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//step4
// Adding a light source
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light);


//step5
// set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//step6
// animate the scene 
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate()
