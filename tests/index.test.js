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
        it("should return 5", () => {
            let acc = new Accumulator(4);
            acc.increment();
        expect(acc.value).toBe(5);
    });

  
        it("should return 11", () => {
        let acc = new Accumulator(10);
        acc.increment();
        expect(acc.value).toBe(11);
    });
    
  }); 
});







    describe("Get value increment", () => {
        const desc = "<p>Get value increment</p>";

        describe(desc, () => {
            it("should return 5", () => {
                let acc = new Accumulator(4);
                acc.increment();
            expect(acc.value).toBe(5);
        });

      
            it("should return 11", () => {
            let acc = new Accumulator(10);
            acc.increment();
            expect(acc.value).toBe(11);
        });
        
      }); 
    });

    describe("Get value decrement", () => {
        const desc = "<p>Get value decrement</p>";

        describe(desc, () => {
            it("should return 3", () => {
                let acc = new Accumulator(4);
                acc.decrement();
            expect(acc.value).toBe(3);
        });

      
            it("should return 25", () => {
            let acc = new Accumulator(26);
            acc.decrement();
            expect(acc.value).toBe(25);
        });

      }); 
    });


    describe("Check CancelableAccumulator constructor prototype (increment method)", () => {
        const desc = "<p>Check CancelableAccumulator constructor prototype (increment method)</p>";

        describe(desc, () => {
            it("should return 2", () => {
                let Cacc = new CancelableAccumulator(1);
                Cacc.increment();
            expect(Cacc.value).toBe(2);
        });

      
            it("should return 11", () => {
            let Cacc = new CancelableAccumulator(10);
            Cacc.increment();
            expect(Cacc.value).toBe(11);
        });

      }); 
    });



    describe("Check clear method", () => {
        const desc = "<p>Check clear method</p>";

        describe(desc, () => {
            it("should return 4", () => {
                let Cacc = new CancelableAccumulator(4);
                Cacc.clear();
            expect(Cacc.value).toBe(4);
        });

      
            it("should return 12", () => {
            let Cacc = new CancelableAccumulator(12);
            Cacc.clear();
            expect(Cacc.value).toBe(12);
        });

      }); 
    });

   