// import { FBXLoader } from 'FBXLoader.js';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// 1st object - cube
var box = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
var cube = new THREE.Mesh(box, material);
scene.add(cube);
cube.position.x = -4; 
cube.position.y = 0; 
cube.position.z = 0;

// 2nd obejct, lines -- from three.js docs
const geometry = new THREE.SphereGeometry( 100, 100, 100 );

const wireframe = new THREE.WireframeGeometry( geometry );

const line = new THREE.LineSegments( wireframe );
line.material.depthTest = false;
line.material.opacity = 0.25;
line.material.transparent = true;

scene.add( line );

// 3rd object, modeled sword

/*
const loader = new FBXLoader();

loader.load( '../fbx/swordTextured.fbx', function ( fbx ) {

	scene.add( fbx.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
*/

function loadModel() {
    var loader = new THREE.OBJLoader();
    loader.load(
      "../obj/alien.obj",
      function (object) {
        object.rotation.z = Math.PI;
        scene.add(object);
        document.querySelector("h1").style.display = "none";
      }
    );
  }

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    line.rotation.x += 0.001;
    line.rotation.y += 0.001;
    renderer.render( scene, camera );
}
animate();
loadModel(); 
