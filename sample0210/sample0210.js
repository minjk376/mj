// 아래 코드 상대 경로 설정에 문제가 있는 것 같은데.....
// import { GLTFLoader } from "../applications-20230306/applications/libs/three.js-r132/examples/jsm/loaders/GLTFLoader.js"

import * as THREE from 'three';
import {MindARThree} from 'mindar-image-three';

document.addEventListener('DOMContentLoaded', () => {
    const start = async () => {
        const mindarThree = new MindARThree({
            container: document.body,
            imageTargetSrc: './targets.mind'
        });
        const { renderer, scene, camera } = mindarThree;

        // create AR object
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.5 });
        const plane = new THREE.Mesh(geometry, material);

        // create anchor
        const anchor = mindarThree.addAnchor(0);
        anchor.group.add(plane);

        // const loader = new GLTFLoader();
        // loader.load("../applications-20230306/applications/assets/models/musicband-raccoon/scene.gltf", (gltf) => {
        //     //gltf.scene: THREE.Group
        //     anchor.group.add(gltf.scene);
        // });

        // start AR
        await mindarThree.start();
        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });
    }
    start();
});
