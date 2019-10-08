

class Animal {

    public animalType: String;
    public age: Number;
    public food: String[] | String;

    constructor(animalType: String, age: Number, food: String | String) {
        this.animalType = animalType;
        this.age = age;
        this.food = this.setFood(food)

    }


    setFood(foodType: String | String[]): String | String[] {

        if (Array.isArray(foodType)) {
            console.log('made from array')
            return foodType
        }

        if (typeof foodType === "string") {
            console.log('made from string')
            return [foodType]
        }
    }

    get kindOfFood(): Any {
        return this.food
    }

    @enumerable(true)
    goesMoo(): String {
        const stdout = "mooo"
        return stdout
    }

}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const orig = target
       // const keys = propertyKey
        // console.log(orig, "target", keys, 'prop key')
        // console.log(orig)

        if (!value) {
            console.log(value, "in if statment")
            throw new Error("can't go moo")
        }

        console.log(orig.goesMoo)


    };
}

// const cow = new Animal('cow', 12, ['steak'])
const cow2 = new Animal('cow', 12, 'steak')


// console.log(cow.kindOfFood)
console.log(cow2.goesMoo())


