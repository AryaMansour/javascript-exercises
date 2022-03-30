const findTheOldest = (old) => {
    let oldest = 0;
    let current = 0;
    let person = []
    for (i=0; i<old.length; ++i) {
       current = old[i].yearOfDeath - old[i].yearOfBirth;
       if (current > oldest) {
           person = old[i].name
           oldest = current
       };
    };
    return person
};

// Do not edit below this line
module.exports = findTheOldest;
