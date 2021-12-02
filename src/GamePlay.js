
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
		var me=this;
        me.load.image('background',"assets/images/fondo1.png");
		me.load.spritesheet("crow","assets/images/tel1.png",269,300);
		me.load.spritesheet("dino","assets/images/tri1.png",360.4,250);
		me.load.spritesheet("trex","assets/images/trex2.png",370,300);
    },
    create: function() {
		var me=this;
        me.game.add.sprite(0, 0, 'background');
		
		me.crow= me.game.add.sprite(10,10,"crow");
		me.crow.animations.add("right",[0,1,2,3,4,5,6],7,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.crow.animations.play("right");
		
		me.man=me.game.add.sprite(229,350,"dino");
		me.man.animations.add("right",[0,1,2,3,4,5],6,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.man.animations.play("right");

		me.man1=me.game.add.sprite(10,298,"trex");
		me.man1.animations.add("right",[0,1,2,3,4,5,6],7,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.man1.animations.play("right");

	

    },
    update: function() {
		var me=this;
		me.crow.x+=1.5;
		me.man.x+=1;
		me.man1.x+=1;
		if(me.crow.x>=me.game.world.width){
			me.crow.x=-100;
			}
		if(me.man.x>=me.game.world.width){
			me.man.x=-100;
			}
		if(me.man1.x>=me.game.world.width){
			me.man1.x=-100;
		}
		
        
    }
}

var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");