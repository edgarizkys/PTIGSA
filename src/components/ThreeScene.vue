<template>
  <div ref="container" class="absolute inset-0 w-full h-full pointer-events-none z-0"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';

const container = ref(null);
let animationFrameId = null;

// Three.js instances
let scene, camera, renderer;
let mainGroup, sphereMesh, innerIcosahedron, ringMesh1, ringMesh2, particles;
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

const handleMouseMove = (event) => {
  mouseX = (event.clientX - window.innerWidth / 2) * 0.0005;
  mouseY = (event.clientY - window.innerHeight / 2) * 0.0005;
};

onMounted(() => {
  if (!container.value) return;

  const width = container.value.clientWidth || window.innerWidth;
  const height = container.value.clientHeight || window.innerHeight;

  // Scene
  scene = new THREE.Scene();

  // Camera
  camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
  camera.position.z = 18;

  // Renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.value.appendChild(renderer.domElement);

  // Group to hold central object
  mainGroup = new THREE.Group();
  scene.add(mainGroup);

  // Central Wireframe Icosahedron (Core)
  const icoGeo = new THREE.IcosahedronGeometry(4.5, 2);
  const icoMat = new THREE.MeshBasicMaterial({
    color: 0x00FFD1,
    wireframe: true,
    transparent: true,
    opacity: 0.25,
  });
  sphereMesh = new THREE.Mesh(icoGeo, icoMat);
  mainGroup.add(sphereMesh);

  // Inner Solid Polyhedron
  const innerGeo = new THREE.OctahedronGeometry(2.5, 0);
  const innerMat = new THREE.MeshPhongMaterial({
    color: 0xFFBF00,
    emissive: 0xFF8C00,
    emissiveIntensity: 0.5,
    wireframe: true,
    transparent: true,
    opacity: 0.6,
  });
  innerIcosahedron = new THREE.Mesh(innerGeo, innerMat);
  mainGroup.add(innerIcosahedron);

  // Orbit Rings
  const ringGeo1 = new THREE.TorusGeometry(7, 0.04, 16, 100);
  const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x007BFF, transparent: true, opacity: 0.5 });
  ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
  ringMesh1.rotation.x = Math.PI / 3;
  mainGroup.add(ringMesh1);

  const ringGeo2 = new THREE.TorusGeometry(8.5, 0.03, 16, 100);
  const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xFFBF00, transparent: true, opacity: 0.35 });
  ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
  ringMesh2.rotation.y = Math.PI / 4;
  ringMesh2.rotation.x = -Math.PI / 6;
  mainGroup.add(ringMesh2);

  // Floating Particle Cloud
  const particleCount = 250;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const palette = [
    new THREE.Color(0xFFBF00), // Amber Gold
    new THREE.Color(0x007BFF), // Electric Blue
    new THREE.Color(0x00FFD1), // Cyan Mint
  ];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 45;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 45;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

    const chosenColor = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3] = chosenColor.r;
    colors[i * 3 + 1] = chosenColor.g;
    colors[i * 3 + 2] = chosenColor.b;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.15,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
  });

  particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0x00ffd1, 2);
  dirLight.position.set(10, 20, 15);
  scene.add(dirLight);

  const pointLight = new THREE.PointLight(0xffbf00, 3, 50);
  pointLight.position.set(-10, -10, 10);
  scene.add(pointLight);

  // Event Listeners
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', handleResize);

  // Animation Loop
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);

    // Smooth lerp mouse target
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    if (mainGroup) {
      mainGroup.rotation.y += 0.003;
      mainGroup.rotation.x += 0.001;
      mainGroup.rotation.y += targetX * 0.5;
      mainGroup.rotation.x += targetY * 0.5;
    }

    if (innerIcosahedron) {
      innerIcosahedron.rotation.y -= 0.006;
      innerIcosahedron.rotation.z += 0.004;
    }

    if (ringMesh1) ringMesh1.rotation.z += 0.002;
    if (ringMesh2) ringMesh2.rotation.z -= 0.003;

    if (particles) {
      particles.rotation.y += 0.0008;
      particles.rotation.x -= 0.0004;
    }

    camera.position.x += (targetX * 5 - camera.position.x) * 0.05;
    camera.position.y += (-targetY * 5 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  };

  animate();
});

const handleResize = () => {
  if (!container.value || !renderer || !camera) return;
  const width = container.value.clientWidth || window.innerWidth;
  const height = container.value.clientHeight || window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
};

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('resize', handleResize);

  if (renderer && renderer.domElement && container.value) {
    container.value.removeChild(renderer.domElement);
    renderer.dispose();
  }
});
</script>
