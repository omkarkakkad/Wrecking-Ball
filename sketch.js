const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup(){
    createCanvas(3000,800);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(880,600,1800,20);

    box1 = new Box(900,120,55,55);
    box2 = new Box(900,140,55,55);
    box3 = new Box(900,160,55,55);
    box4 = new Box(900,180,55,55);
    box5 = new Box(900,200,55,55);
    box6 = new Box(900,220,55,55);
    box7 = new Box(900,240,55,55);
    box8 = new Box(900,260,55,55);
    box9 = new Box(900,280,55,55);

    box10 = new Box(845,120,55,55);
    box11 = new Box(845,140,55,55);
    box12 = new Box(845,160,55,55);
    box13 = new Box(845,180,55,55);
    box14 = new Box(845,200,55,55);
    box15 = new Box(845,220,55,55);
    box16 = new Box(845,240,55,55);
    box17 = new Box(845,260,55,55);
    box18 = new Box(845,280,55,55);
    
    box19 = new Box(790,120,55,55);
    box20 = new Box(790,140,55,55);
    box21 = new Box(790,160,55,55);
    box22 = new Box(790,180,55,55);
    box23 = new Box(790,200,55,55);
    box24 = new Box(790,220,55,55);
    box25 = new Box(790,240,55,55);
    box26 = new Box(790,260,55,55);
    box27 = new Box(790,280,55,55);

    box28 = new Box(735,120,55,55);
    box29 = new Box(735,140,55,55);
    box30 = new Box(735,160,55,55);
    box31 = new Box(735,180,55,55);
    box32 = new Box(735,200,55,55);
    box33 = new Box(735,220,55,55);
    box34 = new Box(735,240,55,55);
    box35 = new Box(735,260,55,55);
    box36 = new Box(735,280,55,55);

    box37 = new Box(680,120,55,55);
    box38 = new Box(680,140,55,55);
    box39 = new Box(680,160,55,55);
    box40 = new Box(680,180,55,55);
    box41 = new Box(680,200,55,55);
    box42 = new Box(680,220,55,55);
    box43 = new Box(680,240,55,55);
    box44 = new Box(680,260,55,55);
    box45 = new Box(680 ,280,55,55);
    

    ball = new Ball(450,200,100,100);

    rope = new Rope(ball.body,{x:550,y:50})

    Engine.run(engine);
}

function draw(){
    background("gray");
    Engine.update(engine);

    ground.display();
    
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();

    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();

    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();
    box42.display();
    box43.display();
    box44.display();
    box45.display();

    strokeWeight(5);
    stroke("black");
    ball.display();

    rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}