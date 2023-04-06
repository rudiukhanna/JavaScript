// describe("Find the biggest element in array", () => {
//     const desc = "<p>Find the biggest element in array</p>";

//     describe(desc, () => {
//         it("should return the biggest element in array", () => {
//             const arr = [2, 17, 'hello', 53, 15, 105, 'cat', 73, -7, 12, 0, 'js', 27];

//             let biggestElem = Number.isNaN(arr[0]); 
//             for (let i = 0; i < arr.length; i++) {
//                 if (arr[i] > biggestElem) {
//                     biggestElem = arr[i];
//                 }
//             }

//             expect(biggestElem).toBe(105);
//          })
//     });
//  });



//  describe("Find the smallest element in array", () => {
//     const desc = "<p>Find the smallest element in array</p>";

//     describe(desc, () => {
//         it("should return the smallest element in array", () => {

//             const arr = [2, 17, 'hello', 53, 15, 105, 'cat', 73, -7, 12, 0, 'js', 27];
//             let smallestElem = Number.isNaN(arr[0]);
//              for (let elem of arr) {
//                 if (elem < smallestElem) {
//                     smallestElem = elem;
//                 }
//              }
             
//              expect(smallestElem).toBe(-7);
//         })
//     });
//  });



//  describe("Find the sum of array's elements", () => {
//     const desc = "<p>Find the sum of array's elements</p>";

//     describe(desc, () => {
//         it("should return the sum of array's elements", () => {
            
//                 const arr = [2, 17, 'hello', 53, 15, 105, 'cat', 73, -7, 12, 0, 'js', 27];

//                 let sum = 0;

//                 for ( let elem of arr ) {
//                 if (typeof elem === 'number') {
//                     sum += elem;
//                 }
//                 }
//                 expect(sum).toBe(297);
//         })
//     });
//  });



//  describe("Triangle of hashtags", () => {
//     const desc = "<p>Triangle of hashtags</p>";

//     describe(desc, () => {
//         it("should return the triangle of hashtags", () => {
//           let str = "";
//           for (let i = 0; i < 5; i++) {
//             str += "#";
//             console.log(str);
//           }
          
//           expect(str);
//         })
//       });
      
//     });



    describe("Get value increment", () => {
        const desc = "<p>Get value increment</p>";

        describe(desc, () => {
            const result = acc.increment(1);
            expect(result).toBe(2)
        });
    })