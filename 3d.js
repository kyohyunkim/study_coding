//흩날리는
let camera
let scene
let renderer
let material
let mouseX = 0
let mouseY = 0
let windowHalfX = window.innerWidth / 2
let windowHalfY = window.innerHeight / 2

init()
animate()

function init () {
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 5, 2000)
  camera.position.z = 500

  scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x0000ff, 0.1)
  //scene.background = new THREE.Color( 0xff0000 );

  const geometry = new THREE.BufferGeometry();
    
  const vertices = []
  const size = 2000

  for ( let i = 0; i < 20000; i ++ ) {
    const x = (Math.random() * size + Math.random() * size) / 2 - size / 2
    const y = (Math.random() * size + Math.random() * size) / 2 - size / 2
    const z = (Math.random() * size + Math.random() * size) / 2 - size / 2

    vertices.push(x, y, z)
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

  material = new THREE.PointsMaterial({
    size: 2,
    color: 0xffffff,
  })

  const particles = new THREE.Points(geometry, material)
    
  scene.add(particles)

  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  document.body.style.touchAction = 'none'
  document.body.addEventListener('pointermove', onPointerMove)
  window.addEventListener('resize', onWindowResize)
    
}

function onWindowResize () {
  windowHalfX = window.innerWidth / 2
  windowHalfY = window.innerHeight / 2

  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function onPointerMove (event) {
  mouseX = event.clientX - windowHalfX 
  mouseY = event.clientY - windowHalfY
}

function animate () {
  requestAnimationFrame(animate)
  render()
}

function render () {
  camera.position.x += (mouseX * 2 - camera.position.x) * 0.02
  camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02
  camera.lookAt(scene.position)
  renderer.render(scene, camera)
  scene.rotation.x += 0.001
  scene.rotation.y += 0.002
}












//달달달
// examples
// https://threejs.org/examples/?q=particle#webgl_points_billboards

const img = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/06a094a4-7bd7-4bb9-b998-6c1e17f66c08/dbcju0k-b9b333e1-dd8d-4657-90db-7d3e7e179843.png';

class App {
	constructor() {
		this.renderer, this.sphere, this.camera = undefined;

		this.init();
	}

	init() {
		// scene setup
		this.scene = new THREE.Scene();

		// light setup
		this.pointLight = new THREE.PointLight(0xffffff, 0);
		this.pointLight.position.set(-200, 50, 200);
		this.pointLight.castShadow = true;
		this.scene.add(this.pointLight);

		// dime light
		new TweenMax.to(this.pointLight, 1, {
			intensity: 1.2,
			delay: 1
		});

		this.initCamera();
		this.initRenderer();
		this.createCanvas();
		this.render();
		this.initSphere();
		window.addEventListener("resize", ()=>{
			this.onWindowResize();	
		}, false);
		this.cursorPosition();
	}
	
	cursorPosition() {
		window.addEventListener("mousemove", (event)=>{
			let posX = event.clientX;
			
			this.pointLight.position.x = (( posX / window.innerWidth ) * 2 - 1) * 200;
		})
	}

	createCanvas() {
		// canvas conatiner
		const container = document.querySelector("body");

		// add canvas to dom
		container.appendChild(this.renderer.domElement);
	}

	initRenderer() {
		// WebGL renderer
		this.renderer = new THREE.WebGLRenderer({
			antialias: true
		});
		this.renderer.setClearColor(0x000000);
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}

	initCamera() {
		// camera setup
		this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
		this.camera.position.z = 50;
		this.camera.position.y = 0;
	}

	render() {
		this.renderer.render(this.scene, this.camera);
		
		if (this.sphere !== undefined){
			this.sphere.rotation.y += 0.001;
		}
		
		requestAnimationFrame(() => this.render());
	}

	onWindowResize() {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}
	
	initSphere(){
		var texloader = new THREE.TextureLoader();
		texloader.load(img, (tex) => {
			let geometry = new THREE.SphereGeometry( 10, 22, 22 );
			let material = new THREE.MeshPhongMaterial({
				color: 0xB2B2B2,
				normalMap: tex,
				shininess: 0
			});
			this.sphere = new THREE.Mesh( geometry, material );
			this.sphere.rotation.z = 0.5;
			this.scene.add( this.sphere );
		});
	}
}

new App();