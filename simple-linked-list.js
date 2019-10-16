export class Element {
    constructor(value) {
        this.next = null
        this.value = value
    }
}

export class List {
    constructor(init) {
        this.head = null
        this.length = 0

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
        this.head = element

        // incrament our length counter
        this.length++

    } // end of add function

    toArray(){

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

} // end of list class
