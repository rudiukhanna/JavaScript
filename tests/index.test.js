describe("Find sum of numbers", () => {
    const desc = "<p>Find sum of numbers</p>";

    describe(desc, () => {
        it("should return 10", () => {
            const result = getSum(6, 4);
            expect(result).toBe(10);
        })
    })
})


describe("Find difference of numbers", () => {
    const desc = "<p>Find difference of numbers</p>";

    describe(desc, () => {
        it("should return 5", () => {
            const result = getDifference(15, 10);
            expect(result).toBe(5);
        })
    })
})


describe("Find mul of numbers", () => {
    const desc = "<p>Find mul of numbers</p>";

    describe(desc, () => {
        it("should return 100", () => {
            const result = getMul(10, 10);
            expect(result).toBe(100);
        })
    })
})


describe("Find division of numbers", () => {
    const desc = "<p>Find division of numbers</p>";

    describe(desc, () => {
        it("should return 6", () => {
            const result = getDivision(24, 4);
            expect(result).toBe(6);
        })
    })
})


describe("Find the smallest element in array", () => {
    const desc = "<p>Find the smallest element in array</p>";

    describe(desc, () => {
        it("should return -7", () => {
            const result = findMin([0, 12, 'cat', 'hello', 25, -7, 10, 0]);
            expect(result).toBe(-7);
        })
    })
})


describe("Find the biggest element in array", () => {
    const desc = "<p>Find the biggest element in array</p>";

    describe(desc, () => {
        it("should return 10023", () => {
            const result = findMax(['js', 105, 10023, -10, 'is', 12, 'awesome', 75]);
            expect(result).toBe(10023);
        })
    })
})


describe("Get value increment", () => {
    const desc = "<p>Get value increment</p>";

    describe(desc, () => {
        it("should return 5", () => {
            let acc = new Accumulator(4);
            acc.increment();
        expect(acc.value).toBe(5);
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
      }); 
    });


    describe("Check CancelableAccumulator increment method", () => {
        const desc = "<p>Check CancelableAccumulator increment method</p>";

        describe(desc, () => {
            it("should return 2", () => {
                let Cacc = new CancelableAccumulator(1);
                Cacc.increment();
            expect(Cacc.value).toBe(2);
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
      }); 
    });


    describe("Simulate 'click'", () => {
        const desc = "<p>Simulate 'click'</p>";

        describe(desc, () => {

            it("should toggle the photo class when called", function() {

                let photo = document.createElement("div");
                photo.id = "photo";
                let isEnlarged = false;
                spyOn(photo.classList, "toggle");
            
                isEnlarged = simulateClick(photo, isEnlarged);
            
                expect(photo.classList.toggle).toHaveBeenCalled();
                expect(isEnlarged).toBe(true);
            
                isEnlarged = simulateClick(photo, isEnlarged);
            
                expect(photo.classList.toggle).toHaveBeenCalled();
                expect(isEnlarged).toBe(false);
        });
       });
      });
      
      
      
      
      
      
      
      
      
   



   