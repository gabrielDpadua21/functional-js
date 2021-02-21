// Implementacao de functor

function secType(value) {
    return {
        value,
        invalid() {
            this.value === null || this.value === undefined;
        },
        map(fn) {
            if(this.invalid()) {
                return secType(null);
            }
            return secType(fn(this.value))
        }
    }
}


const result1 = secType('NEO')
                    .map(name => name.toLowerCase())
                    .map(name => `Hello ${name}`)
                    .map(name => name.split('').join(' '))

const result2 = secType('NEO')
                    .map(name => name.toLowerCase())
                    .map(name => null)
                    //.map(name => name.split('').join(' '))


console.log(result1.value);
console.log(result2.value);
