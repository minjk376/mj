import * as THREE from 'three';
import { MindARThree } from 'mindar-image-three';
import { loadGLTF } from "../applications-20230306/applications/libs/loader.js";

document.addEventListener('DOMContentLoaded', () => {
    const start = async () => {
        const mindarThree = new MindARThree({
            container: document.body,
            imageTargetSrc: './targets.mind'
        });
        const { renderer, scene, camera } = mindarThree;

        const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
        scene.add(light);

        const anchor = mindarThree.addAnchor(0);

        const gltf = await loadGLTF("./scene.gltf");
        gltf.scene.scale.set(0.1, 0.1, 0.1);
        gltf.scene.position.set(0, -0.4, 0);
        anchor.group.add(gltf.scene);

        await mindarThree.start();
        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });
    }
    start();
});
