var config={
	type :Phaser.Auto,
	width:800,
	height:600,
	physics:{
		default:'arcade',
		arcade:{
			gravity:{y:200}
		}},
	scene:[Exemple1]
};
var game =new PPhaser.Game(config);

