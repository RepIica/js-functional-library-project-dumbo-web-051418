fi = (function() {
  return {
    // libraryMethod: function() {
    //   return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    // },

    each: function(collection, iteratee) {
      for( const element in collection ) {
        // alert(element)
        // console.log(element)
        iteratee(collection[element])
      }
      // const newArr = []
      // for(let i = 0; i < collection.length; i++) {
      //   const newObjElement = Object.assign({}, collection[i], collection)
      //   console.log(newObjElement)
      //   newArr.push(newObjElement)
      // }
      return collection
    },

    map: function(collection, iteratee) {
      const newThing = []

      const newArr = Object.assign([], collection)
      for(let i = 0; i < newArr.length; i++) {
        newThing[i] = iteratee(newArr[i])
        console.log(newThing)
      }

      return newThing
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

// fi.libraryMethod()
