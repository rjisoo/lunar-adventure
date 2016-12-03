LunarAdventure.SingleCrash = function(){};

LunarAdventure.SingleCrash.prototype = {
	create: function() {

		let highScores;

		fetch('/highScore/SinglePlayer')
		.then(res => res.json())
		.then(scoreList => {
			highScores = scoreList;
			message = this.add.sprite(gameWidth/2 - 210, gameHeight/8, 'crash');
			message.scale.setTo(0.6, 0.6);

			this.game.add.text(gameWidth/3 - 20, gameHeight/3 - 60, `Better luck next time! Your journey was ${successGlobalTime} seconds.`, fontStyle);

			//leaderBoard
			let yVal = gameHeight/3 + 30;
			for (var i = 0; i < highScores.length; i++) {
				this.game.debug.text(`${highScores[i].time}s   -   ${highScores[i].name}`, gameWidth/2 - 85, yVal);
				yVal += 30
			}
			this.game.add.text(gameWidth/2.3 - 45, gameHeight - 150, "Press spacebar to play again", fontStyle);
		})
		.catch(err => console.error('error retrieving scores', err))

		this.physics.startSystem(Phaser.Physics.P2JS);
		this.background = this.game.add.tileSprite(0, 0, gameWidth, gameHeight, 'starfield');

		// creating static terrain
		terrain = this.add.sprite(centerX, centerY, 'terrain');
		terrain.anchor.set(0.5)
		this.physics.p2.enable(terrain, false)
		terrain.body.static = true;
		terrain.body.clearShapes();
		terrain.body.loadPolygon('tracedTerrain', 'terrain');
	},

	update: function() {
		terrain.body.rotation -= 0.003;

		//press spacebar to play again
		if (tempCursors.spacebar.isDown) {
			this.game.state.start('MainMenu')
		}
	}
};
