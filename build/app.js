window.onload=function(){var a=new Phaser.Game(800,600,Phaser.AUTO,"gameContainer");a.state.add("Boot",BasicGame.Boot),a.state.add("Preloader",BasicGame.Preloader),a.state.add("MainMenu",BasicGame.MainMenu),a.state.add("Game",BasicGame.Game),a.state.start("Boot")};