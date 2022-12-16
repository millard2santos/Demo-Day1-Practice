const tyler = {
    name : 'Tyler',
    HP: 100,
    damage : 15,
    attack (obj) {
        console.log(this)
        return obj.HP -= this.damage
    }
}
const chuck = {
    name : 'Chuck',
    HP: 80,
    damage : 10,
    attack (obj) {
        console.log(this)
        return obj.HP -= this.damage
    }
}
const array = [tyler,chuck]
while (tyler.HP > 0 && chuck.HP > 0){
    let random = Math.round(Math.random())
    setTimeout(() => {
        if (random === 0){
           return array[0].attack(array[1])
        }else{
            return array[1].attack(array[2])
        }
    },2000)
}

const fight = (obj1, obj2) => {
    let count = 0
    while (obj2.HP > 0){
        obj1.attack(obj2)
        count += 1
    }
    return `${obj1.name} ha derrotado a ${obj2.name} en ${count} rondas`
}




