class Element {
    constructor(value) {
        this.next = null
        this.value = value
    }
}

class List {
    constructor(init) {
        this.head = null
        this.length = 0
        this.current = null

        if (Array.isArray(init)) {

            for (let element of init) {
                this.add(new Element(element))
            }
        }
        else if (init !== undefined) {

            this.add(new Element(init))

        }
    }

    add(element) {

        element.next = this.head
        this.current = this.head = element
    
        // incrament our length counter
        this.length++

    } // end of add function

    toArray() {

        let rtnValue = []
        let currentElement = this.head
        while (currentElement != null) {
            rtnValue.push(currentElement.value)
            currentElement = currentElement.next
        }

        return rtnValue
    }

    reverse() {

        let revArr = this.toArray()
        return new List(revArr)
    }

    [Symbol.iterator]() {

        return {

            next: () => {

                if (this.current != null) {

                    let value = this.current.value
                    this.current = this.current.next
                    return { value, done: false };

                } else {

                    this.current = this.head; //If we would like to iterate over this again without forcing manual update of the index
                    return { done: true };

                }

            }

        } // object with a next method

    } // end of symbol itterator function

} // end of list class


let LList = new List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

for (let item of LList) {
    console.log(item)
}

console.log([...LList])

console.log(Array.from(LList))