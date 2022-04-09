class FirstClass{
    constructor(){
        this.namee = namee;
        this.age = age;
    }

    first(){
        console.log(this.name);
    }

    static firststatic(){
        const name = 'muyiwa johnson';
        // this.namee = name;
        const namee = name;
        return namee;
    }
}


class SecondClass{
    constructor(){}

    static SecondStatic(){
        // const use = FirstClass.firststatic();
        // console.log(use);
        if( FirstClass.firststatic()){
            console.log('use');
        }

    }
}
FirstClass.firststatic();
SecondClass.SecondStatic();

