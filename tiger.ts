 class Animal {
     
     
   public name:string;
    constructor(name){
       this.name=name;
     }
    move(distance) {

    }
     makeSound() {

    }

}

export class Tiger extends Animal {
    constructor(name){
        super(name);
    }

    makeSound(){
        console.log("Tiger " +this.name + "makes "+ "graunt sound");
    }


}

let tiger = new Tiger("Leo");
tiger.makeSound();
