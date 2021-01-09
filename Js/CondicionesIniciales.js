var avance = 0
var girando = 0;
var angulo = 0;
var container, stats, controls;
var camera, scene, renderer, light;
var personaje = new THREE.Object3D();
var posx = 0;
var posy = 0;
var posz = 0;
var mixer;
var numeroCosas=40;
var cubos = new Array;
var esferas= new Array;
var cilindros=new Array;
var clock = new THREE.Clock();
var deltaTime = clock.getDelta();

