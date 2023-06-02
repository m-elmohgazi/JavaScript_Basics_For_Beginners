

// method in an object

let person = {
    firstName: 'Mohammed',
    lastName: 'Ali',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
console.log(person.fullName)
person.fullName = "Mohammed Almoghazi";
console.log(person.fullName);



