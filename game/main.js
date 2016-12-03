var LunarAdventure = LunarAdventure || {};

//phaser accepts %s as well as pxs - 4th argument is a parent DOM element
//1280 vs 800
//1200 v 600 looks good

// global font style
var fontStyle = { font: "22px Asap", fill: "#fff"};
var fontStyle_small = { font: "18px Asap", fill: "#fff"};

LunarAdventure.game = new Phaser.Game(1280,800, Phaser.AUTO);

// Google WebFont Loader
WebFontConfig = {
    google: {
      families: ['Asap'] //  we can load as many fonts as we want in the array
    }
};

// setup global variables
var textStyle = function(size, color) {
	var color = color === 'black' ? "#444" : "#ddd"
	return { font: `${size}px Arial`, fill: color, align: "center" }
};


let width = 1280;
let height = 800;

// setup game states
LunarAdventure.game.state.add('Preload', LunarAdventure.Preload);
LunarAdventure.game.state.add('MainMenu', LunarAdventure.MainMenu);
LunarAdventure.game.state.add('SingleCrash', LunarAdventure.SingleCrash);
LunarAdventure.game.state.add('MultiCrash', LunarAdventure.MultiCrash);
LunarAdventure.game.state.add('SingleSuccess', LunarAdventure.SingleSuccess);
LunarAdventure.game.state.add('MultiSuccess', LunarAdventure.MultiSuccess);
LunarAdventure.game.state.add('Game', LunarAdventure.Game);
LunarAdventure.game.state.add('Multiplayer', LunarAdventure.Multiplayer);
LunarAdventure.game.state.add('Lobby', LunarAdventure.Lobby);
LunarAdventure.game.state.add('GameRoom', LunarAdventure.GameRoom);

LunarAdventure.game.state.start('Preload');
