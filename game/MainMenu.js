LunarAdventure.MainMenu = function(){};

LunarAdventure.MainMenu.prototype = {
	create: function() {

		this.physics.startSystem(Phaser.Physics.P2JS);

		this.background = this.game.add.tileSprite(0, 0, width, height, 'starfield');

		astronaut = this.add.sprite(width/2 - 50, height/4.5, 'astronaut');
		astronaut.scale.setTo(0.5, 0.5);

		logo = this.add.sprite(width/2 - 240, height/2.5, 'logo');
		logo.scale.setTo(0.8, 0.8);

		// creating static terrain
		terrain = this.add.sprite(width/2, height/0.65 + 200, 'terrain');
		terrain.anchor.set(0.5)
		this.physics.p2.enable(terrain, false)
		terrain.body.static = true;
		terrain.body.clearShapes();
		terrain.body.loadPolygon('tracedTerrain', 'terrain');

		let singlePlayer = this.game.add.text(width/2.8, height/2, 'Single Player', textStyle(height/40, 'white'));
		singlePlayer.inputEnabled = true;
		singlePlayer.events.onInputDown.add(this.startSinglePlayer, this);

		let multiPlayer = this.game.add.text(width/1.8, height/2, 'Multi Player', textStyle(height/40, 'white'));
		multiPlayer.inputEnabled = true;
		multiPlayer.events.onInputDown.add(this.startMultiPlayer, this);

		// this.game.debug.text('click to begin', width/2 - 70, height/1.9);

		// // input form
		// this.game.add.plugin(Fabrique.Plugins.InputField);
		// input = this.game.add.inputField(width/2.3, height/1.6, {
		// 	font: '18px Arial',
		// 	fill: '#212121',
		// 	fontWeight: 'bold',
		// 	width: 150,
		// 	padding: 8,
		// 	borderWidth: 1,
		// 	borderColor: '#000',
		// 	borderRadius: 6
		// });
	},

	update: function() {
		terrain.body.rotation -= 0.003;
		this.background.tilePosition.x += 0.5;
		this.background.tilePosition.y -= 0.5;
	},

	startSinglePlayer: function() {
		this.game.state.start('Game')
	},

	startMultiPlayer: function() {
		// if (input.value) {
			this.game.state.start('Lobby')
		// }
	}

};
