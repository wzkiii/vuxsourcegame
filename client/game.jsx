
import React from 'react';

import Chat from './Components/ChatComponent';
import Field from './Components/Field';
import Line from './Components/Field/line';
import Circle from './Components/Field/circle';
import Disc from './Components/Field/disc';
import Arc from './Components/Field/arc';
import Goal from './Components/Field/goal';
import Player from './Components/Player';
import Ball from './Components/Ball';
import Room from './Components/Room';
import Collisions from './collisions';

import materials from './materials';
import SoundManager from './SoundManager';

import GameActions from './Actions/GameActions';

//classic  theme
let lines = [
                //line up
                {
                    x1: 50,
                    y1: 50,
                    x2: 789,
                    y2: 50,
                    collidesWithBall: true,
                    collidesWithPlayer: false,
                    style: {
                        borderColor: 0xffffff,
                        borderSize: 2,
                        borderAlpha: 1
                    }
                },
                //line right 1
                {
                    x1: 790,
                    y1: 49,
                    x2: 790,
                    y2: 162,
                    collidesWithBall: true,
                    collidesWithPlayer: false,
                    style: {
                        borderColor: 0xffffff,
                        borderSize: 2,
                        borderAlpha: 1
                    }
                },
                //line right 2
                {
                    x1: 790,
                    y1: 300,
                    x2: 790,
                    y2: 389,
                    collidesWithBall: true,
                    collidesWithPlayer: false,
                    style: {
                        borderColor: 0xffffff,
                        borderSize: 2,
                        borderAlpha: 1
                    }
                },
                //line down
                {
                    x1: 50,
                    y1: 388,
                    x2: 789,
                    y2: 388,
                    collidesWithBall: true,
                    collidesWithPlayer: false,
                    style: {
                        borderColor: 0xffffff,
                        borderSize: 2,
                        borderAlpha: 1
                    }
                },
                //line left 1
                {
                    x1: 49,
                    y1: 49,
                    x2: 49,
                    y2: 150,
                    collidesWithBall: true,
                    collidesWithPlayer: false,
                    style: {
                        borderColor: 0xffffff,
                        borderSize: 2,
                        borderAlpha: 1
                    }
                },
                //line left 2
                {
                    x1: 50,
                    y1: 300,
                    x2: 50,
                    y2: 389,
                    collidesWithBall: true,
                    collidesWithPlayer: false,
                    style: {
                        borderColor: 0xffffff,
                        borderSize: 2,
                        borderAlpha: 1
                    }
                },
                //linha gol home cima
                {
                    x1: 55,
                    y1: 160,
                    x2: 10,
                    y2: 160,
                    collidesWithBall: true,
                    collidesWithPlayer: false,
                    style: {
                        borderColor: 0xffffff,
                        borderSize: 2,
                        borderAlpha: 1
                    }
                },

                //linha gol home baixo
                 {
                    x1: 55,
                    y1: 300,
                    x2: 10,
                    y2: 300,
                    collidesWithBall: true,
                    collidesWithPlayer: false,
                    style: {
                        borderColor: 0xffffff,
                        borderSize: 2,
                        borderAlpha: 1
                    }
                },

                // linha gol home fundo
                {
                x1: 10,
                y1: 160,
                x2: 10,
                y2: 300,
                collidesWithBall: true,
                collidesWithPlayer: false,
                style: {
                borderColor: 0xffffff,
                borderSize: 2,
                borderAlpha: 1
                }

                 },
                //linha gol away cima
                {
                    x1: 785,
                    y1: 160,
                    x2: 825,
                    y2: 160,
                    collidesWithBall: true,
                    collidesWithPlayer: false,
                    style: {
                        borderColor: 0xffffff,
                        borderSize: 2,
                        borderAlpha: 1
                    }
                },

                //linha gol away baixo
                {
                    x1: 785,
                    y1: 302,
                    x2: 825,
                    y2: 302,
                    collidesWithBall: true,
                    collidesWithPlayer: false,
                    style: {
                        borderColor: 0xffffff,
                        borderSize: 2,
                        borderAlpha: 1
                    }
                },

                // linha gol home fundo
                {
                x1: 825,
                y1: 159,
                x2: 825,
                y2: 303,
                collidesWithBall: true,
                collidesWithPlayer: false,
                style: {
                borderColor: 0xffffff,
                borderSize: 2,
                borderAlpha: 1
                }
                 },
                //line middle field
                {
                    x1: 430 - 1,
                    y1: 50,
                    x2: 430 - 1,
                    y2: 388,
                    collidesWithBall: false,
                    collidesWithPlayer: false,
                    style: {
                        borderColor: 0xffffff,
                        borderSize: 2,
                        borderAlpha: 1
                    }
                },
            ];

let circles = [{
                x: 860/2 -1,
                y: 460/2 - 1,
                diameter: 150,
                collidesWithBall: false,
                collidesWithPlayer: false,
                style: {
                    borderColor: 0xffffff,
                    borderSize: 2,
                    borderAlpha: 1 
                }
            }];

let discs = [{
                x: 50,
                y: 160,
                diameter: 15,
                collidesWithBall: true,
                collidesWithPlayer: true,
                style: {
                    backgroundColor:0xffffff,
                    backgroundAlpha: 1,
                    borderColor: 0x000000,
                    borderSize: 2,
                    borderAlpha: 1

                }
            },
            {
                x: 50,
                y: 300,
                diameter: 15,
                collidesWithBall: true,
                collidesWithPlayer: true,
                style: {
                    backgroundColor: 0xffffff,
                    backgroundAlpha: 1,
                    borderColor: 0x000000,
                    borderSize: 2,
                    borderAlpha: 1
                }
            },
            {
                x: 790,
                y: 160,
                diameter: 15,
                collidesWithBall: true,
                collidesWithPlayer: true,
                style: {
                    backgroundColor: 0xffffff,
                    backgroundAlpha: 1,
                    borderColor: 0x000000,
                    borderSize: 2,
                    borderAlpha: 1
                }
            },
            {
                x: 790,
                y: 300,
                diameter: 15,
                collidesWithBall: true,
                collidesWithPlayer: true,
                style: {
                    backgroundColor: 0xffffff,
                    backgroundAlpha: 1,
                    borderColor: 0x000000,
                    borderSize: 2,
                    borderAlpha: 1
                }
            }];
           
let arcs = [{
                x1: 30,
                xy: 160,
                radius: 140,
                startAngle: 150,
                endAngle: 210,
                collidesWithBall: true,
                collidesWithPlayer: false,
                style: {
                    borderColor: 0x000000,
                    borderSize: 3,
                    borderAlpha: 1
                }
            },{
                cx: 790,
                cy: 160,
                radius: 140,
                startAngle: 330,
                endAngle: 30,
                collidesWithBall: true,
                collidesWithPlayer: true,
                style: {
                    borderColor: 0x000000,
                    borderSize: 3,
                    borderAlpha: 1
                }
            }]

let ball = {

            };


//if the ball cross those lines, it's a goal
let goals = {
    home: {

        x1: 50,
        y1: 160,
        x2: 50,
        y2: 300,
        style: {
            borderColor: 0xffffff,
            borderSize: 1,
            borderAlpha: 1

        },


},
    away: {
        x1: 789,
        y1: 160,
        x2: 789,
        y2: 300,
        style: {
            borderColor: 0xffffff,
            borderSize: 1,
            borderAlpha: 1
        }
    }

}




class Game extends React.Component {

    constructor(props) {
        super(props);
        this.bounds = new Phaser.Rectangle(0,0, 840, 410);
        this.childs = [];
        this.onSoundLoad = this.onSoundLoad.bind(this);
    }

    componentDidMount() {
        this.game = new Phaser.Game(this.bounds.width, this.bounds.height, Phaser.AUTO, 'open-hax-game', { preload: () => { this.preload(); }, create: () => { this.create(); }, update: () => { this.update(); } });
        if (this.props.params != null && this.props.params.id_room != null) {
            this.room = new Room(this.props.params.id_room);
            window.room = this.room;
        }

        GameActions.timerStart();
    }

    preload() {
        //images
        this.game.load.image('field', '/img/campo1.png');
        
        //sounds
        this.soundManager = new SoundManager(this.game, this.onSoundLoad);
        this.soundManager.preload();


    }

    create() {
        
        this.soundManager.create();
        this.game.stage.backgroundColor = '#448100';
        this.game.world.setBounds(0, 0 , this.bounds.width, this.bounds.height);
        
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.setImpactEvents(true);
        this.game.physics.p2.restitution = 0.75;
        this.collisions = new Collisions(this.game);
        this.game.physics.p2.updateBoundsCollisionGroup();

        materials.init(this.game);

        this.game.physics.p2.setWorldMaterial(materials.world, true, true, true, true);
        this.game.physics.p2.world.defaultContactMaterial.friction = 0.9;
        this.game.physics.p2.world.setGlobalStiffness(1e5);
        
        this.field = new Field(this.game, materials.field, {
            width: 740,
            height: 340,
            x: 50,
            y: 50,
        });
        this.field.render();
        
        lines.map((props) => {
            let line = new Line(this.game, this.collisions, props);
            this.field.addLine(line);
        });

        circles.map((props) => {
            let circle = new Circle(this.game, this.collisions, props);
            this.field.addCircle(circle);
        });

        

        //goal home
        goals.home.home = true;
        let goalHome = new Goal(this.game, this.collisions, goals.home);
        this.field.addGoal(goalHome);

        //goal away
        goals.away.away = true;
        let goalAway = new Goal(this.game, this.collisions, goals.away);
        this.field.addGoal(goalAway);

        discs.map((props) => {
            let disc = new Disc(this.game, this.collisions, props);
            this.field.addDisc(disc);
        });

        // isso renderiza os jogadores
        this.player = new Player(this.game, materials.player, this.collisions, "home", "Dzeko#I0", "I0", true);
        this.player2 = new Player(this.game, materials.player, this.collisions, "away", "Cone", "8", false);
        
        this.ball = new Ball(this.game, materials.ball, this.collisions);
        
        
        this.field.addPlayer(150, 230, this.player);
        this.field.addPlayer(700, 230, this.player2);
        this.field.addBall(429, 230, this.ball);
 
        this.childs.push(this.player);
        this.childs.push(this.player2);
        this.childs.push(this.ball);
        
        
        
    }

    update() {
    	this.childs.map((child) => {
    		if(typeof child.update == 'function') {
    			child.update();
    		}
    	});
    }

    onSoundLoad () {
        console.log("sounds loaded");
        this.soundManager.startPublic();
        setTimeout(() => {
            this.soundManager.startMatch();
        }, 2000)
    }
    
    render() {


        return  <div className="game">
                    <div id="open-hax-game"></div>
                    <Chat/>
                </div>;
    }

}

export default Game;
