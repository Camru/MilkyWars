BasicGame.MainMenu=function(t){this.music=null,this.playButton=null},BasicGame.MainMenu.prototype={create:function(){this.space=this.add.tileSprite(0,0,this.game.width,this.game.height,"titlePage"),this.loadingText=this.add.text(this.game.width/2,this.game.height/2-175,"Our planet's last hope.",{font:"20px monospace",fill:"#7CFC00"}),this.loadingText.anchor.setTo(.5,.5),this.add.text(this.game.width/2,this.game.height-220,"Press SPACEBAR to start",{font:"19px monospace",fill:"#fff",align:"center"}).anchor.setTo(.5,.5),this.add.text(this.game.width/2,this.game.height-80,"Beautiful Powerups Copyright Mitchell Deaner",{font:"15px monospace",fill:"#fff",align:"center"}).anchor.setTo(.5,.5),this.menuMusic=this.add.audio("menuMusic"),this.menuMusic.play("",0,1,!0)},update:function(){(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)||this.input.activePointer.isDown)&&this.startGame()},startGame:function(t){this.menuMusic.destroy(),this.state.start("Game")}};