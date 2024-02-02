import * as THREE from 'three';

document.addEventListener("DOMContentLoaded", () => {
    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({color: "#0000FF"});
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    cube.position.set(0, 0, -2);
    cube.rotation.set(0, Math.PI/4, 0);

    const camera = new THREE.PerspectiveCamera();
    camera.position.set(1, 1, 5);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(500, 500);
    document.body.appendChild(renderer.domElement);
});