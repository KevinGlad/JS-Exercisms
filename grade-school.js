//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  
  constructor () {
    // the tests require an object to be returned.
    // create an empty object
    this._roster = {}
  }

  roster() {
    // roster needs to return an object that can't be used to
    // alter the original object.
    // Object.assign only does a shallow copy.
    // this leaves the arrays subject to change.
    // this is solved by going through each key of the object and
    // creating a duplicate key with a dupliacte array on the new object
    let rtnValue = {}

    // this is a for in loop not a for of loop
    for (let key in this._roster) {

      // copy array with the spread operator
      rtnValue[key] = [...this._roster[key]]

    }

    // return copied or blank object
    return rtnValue
  }

  add(name, grade) {
    
    // convert grade to string so it can be used as a key.
    // js would proably coherce but I like to be sure.
    let strGrade = grade.toString()

    // check to see if our object has this property already
    if (this._roster.hasOwnProperty(strGrade)) {

        // add the name to the existing array and sort the result
        this._roster[strGrade].push(name)
        this._roster[strGrade].sort()

    }
    else
    {

      // add the prperty as the value of the array
      this._roster[strGrade] = [name]

    } // end if hasOwnProperty

  } // end add

  grade(grade) {

    // convert grade to string
    let strGrade = grade.toString()
    let rtnValue = []

    // check to be sure our object has this property
    if (this._roster.hasOwnProperty(strGrade)) {
      
      // copy the array
      rtnValue = [...this._roster[strGrade]]

    }
    
    // return either blank array or copy from object
    return rtnValue

  }
}
