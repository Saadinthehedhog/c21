class Ground {

    constructor(x,y,w,h){
        let options = {
            isStatic:true
        }
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options)
        World.add(world,this.body)
    }
    show(){
        console.log("hi")
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("red")
        rect(pos.x,pos.y,this.w,this.h)
        pop()
    }
}