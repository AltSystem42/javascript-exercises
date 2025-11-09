const findTheOldest = function(people) {
    const oldest = people.sort((a, b) =>{
        let year = new Date()
        if(!a.yearOfDeath)
        {
            a.yearOfDeath = year.getFullYear()
        }
        if(!b.yearOfDeath){
            b.yearOfDeath = year.getFullYear()
        }
        const lastGuy = a.yearOfDeath - a.yearOfBirth
        const nextGuy = b.yearOfDeath - b.yearOfBirth
        return lastGuy > nextGuy ? -1 : 1
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
