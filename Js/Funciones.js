function creaSuelo(){
    var texture=new THREE.TextureLoader().load("Img/suelo.jpg");
    texture.wrapS=THREE.RepeatWrapping;
    texture.wrapT=THREE.RepeatWrapping;
    texture.repeat.set(5,5);
    var mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 6000, 6000 ), new THREE.MeshPhongMaterial( { map: texture, depthWrite: false } ) );
	mesh.rotation.x = - Math.PI / 2;
	mesh.receiveShadow = true;
	scene.add( mesh );

	var grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
	grid.material.opacity = 0.05;
	grid.material.transparent = true;
	scene.add( grid );
}
function cargaMixamo(){
    var loader = new THREE.FBXLoader();
    ///aqui poner la ubicacion del fbx  y yau
	loader.load( 'Mixamo/Female Walk.fbx', function ( object ) {
	
	mixer = new THREE.AnimationMixer( object );

	var action = mixer.clipAction( object.animations[ 0 ] );
	action.play();
	personaje = object;
	
	
	scene.add( object );
	
	} );
}

function ponLuz(){
    light = new THREE.HemisphereLight( 0xffffff, 0x444444 );
	light.position.set( posx, posy + 200, posz );
	scene.add( light );

	light = new THREE.DirectionalLight( 0xffffff );
	light.position.set( 0, 200, 100 );
	light.castShadow = true;
	light.shadow.camera.top = 180;
	light.shadow.camera.bottom = - 100;
	light.shadow.camera.left = - 120;
	light.shadow.camera.right = 120;
				
	personaje.add( light );
}

function gestionTeclas(){
	if(avance == 1){
		var delta = clock.getDelta();

		if ( mixer ) mixer.update( delta );
	}
	if(avance == -1){
		var delta = clock.getDelta();

		if ( mixer ) mixer.update( delta );
	}
}

function ponCubos(){
        for (var i = 0; i < numeroCosas; i++) {
            var geometry = new THREE.BoxGeometry(100, 100, 100);
            var material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
            var cube = new THREE.Mesh(geometry, material);
			var x=(Math.random()*4000)-2000;
			var z=(Math.random()*4000)-2000;
			cube.position.x = x; 
            cube.position.z = z;
            cubos.push(cube);
            scene.add(cube);
        }
}
function colisionBloques(){
	for (var i = 0; i < numeroCosas; i++) {
		if(Math.sqrt(Math.pow((posx - cubos[i].position.x), 2) + Math.pow((posz - cubos[i].position.z), 2)) < 100){
			 cubos[i].material.color.set( 0xff00ff );
		}
	}
}
function ponEsferas(){
	for (var i = 0; i < numeroCosas; i++) {
		var geometry = new THREE.SphereGeometry(50, 50, 50);
		var material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
		var sphere = new THREE.Mesh(geometry, material);
		var x=(Math.random()*4000)-2000;
		var z=(Math.random()*4000)-2000;
		sphere.position.x = x; 
		sphere.position.z = z;
		esferas.push(sphere);
		scene.add(sphere);
	}
}
function colisionEsferas(){
	for (var i = 0; i < numeroCosas; i++) {
		if(Math.sqrt(Math.pow((posx - esferas[i].position.x), 2) + Math.pow((posz - esferas[i].position.z), 2)) < 100){
			 esferas[i].material.color.set( 0xffff00 );
		}
	}
}
function ponCilindros(){
	for (var i = 0; i < numeroCosas; i++) {
		var geometry = new THREE.CylinderGeometry(50, 50, 50);
		var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
		var cilindro = new THREE.Mesh(geometry, material);
		var x=(Math.random()*4000)-2000;
		var z=(Math.random()*4000)-2000;
		cilindro.position.x = x; 
		cilindro.position.z = z;
		cilindros.push(cilindro);
		scene.add(cilindro);
	}
}
function colisionCilindros(){
	for (var i = 0; i < numeroCosas; i++) {
		if(Math.sqrt(Math.pow((posx - cilindros[i].position.x), 2) + Math.pow((posz - cilindros[i].position.z), 2)) < 100){
			 cilindros[i].material.color.set( 0x000000 );
		}
	}
}