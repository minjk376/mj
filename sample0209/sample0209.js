import * as THREE from 'three';
import {MindARThree} from 'mindar-image-three';

// 아래는 페이지가 로드되면 실행되는 함수를 의미함
document.addEventListener('DOMContentLoaded', () => {
    // mindarTHREE 객체를 생성하고 초기 설정을 전달하여 초기화하는 것
    const start = async () => {
        // const mindarTHREE = new window.MINDAR.IMAGE.mindarTHREE({ 로 하면 실행 안됨
        const mindarThree = new MindARThree({
            container: document.querySelector("#my-ar-container"),
            imageTargetSrc: './targets.mind'
        });
        const { renderer, scene, camera } = mindarThree;

        // create AR object
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.5 });
        const plane = new THREE.Mesh(geometry, material);

        // create anchor
        // scene에 anchor 추가하고 앵커에 해당하는 정보나 설정이 전달되면 해당 내용을 처리하는 역할을 함
        const anchor = mindarThree.addAnchor(0);
        anchor.group.add(plane);


        // start AR
        await mindarThree.start();
        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });
    }
    start();
});
