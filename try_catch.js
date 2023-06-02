const person = {
    firstName: 'Mohammed',
    lastName: 'Ali',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        console.log(value);
        if (typeof value !== 'string') {
            throw new Error('Value is not a string.')
        }

        const parts = value.split(' ');
        if (parts.length !== 2) {
            throw new Error('enter the first and last name.');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
try {
    person.fullName = '';
}
catch (e) {
    alert(e);
}