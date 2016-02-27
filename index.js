var Cylon = require('cylon');

Cylon.api("http", {host: "localhost", ssl: false});

Cylon.robot({
  name: 'mip',
  connections: { 
    bluetooth: {
      adaptor: 'central', 
      uuid: '9f5c5021fab34f1c9c977379573ea116', 
      module: 'cylon-ble'
    },
    keyboard: {adaptor: 'keyboard'}
  },
  devices: {
    mip: {driver: 'mip', connection: 'bluetooth'},
    keyboard: { driver: 'keyboard', connection: 'keyboard' }
  },

  move: function(direction) {
    var my = this;
    switch (direction) {
      case "forward":
        my.mip.driveForward(50, 50);
        break;
      case "backward":
        my.mip.driveBackward(15, 50);
        break;
      case "left":
        my.mip.turnLeft(5, 5);
        break;
      case "right":
        my.mip.turnRight(5, 5);
        break;
    }

    return "ok";
  },

  commands: function() {
    return {
      move: this.move
    };
  },

  work: function(my) {
    my.mip.setHeadLED(2, 2, 2, 2);
    my.keyboard.on("w", function() {
      console.log("forward");
      my.move("forward");
    });
    my.keyboard.on("s", function() {
      console.log("backward");
      my.move("backward");
    });
    my.keyboard.on("d", function() {
      console.log("right");
      my.move("right");
    });
    my.keyboard.on("a", function() {
      console.log("left");
      my.move("left");
    });
    my.keyboard.on("q", function() {
      console.log("flash");
      my.mip.flashChestLED(255, 0, 255, 2, 5);
    });
    my.keyboard.on("x", function() {
      console.log("get up");
      my.mip.getUp(0x02);
    });
    my.keyboard.on("e", function() {
      console.log("dance");
      my.mip.setGameMode(my.mip.Games.Roam);
    });
    my.keyboard.on("z", function() {
      console.log("stop");
      my.mip.setChestLED(0, 255, 0);
      my.mip.stop();
    });
  }
}).start();