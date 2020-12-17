class Chain{


    constructor(body1,body2){

        var options = {


            bodyA: body1,
            bodyB: body2,
            length: 100,
            stiffness: 0.1

        }

        this.chain = Constraint.create(options);

        World.add(world, this.chain);
        




    }
    display(){

        var point1 = this.chain.bodyA.position;
        var point2 = this.chain.bodyB.position;

        push();

        strokeWeight(4);
        stroke("white");
        line(point1.x,point1.y , point2.x, point2.y);

        pop();
    }

}