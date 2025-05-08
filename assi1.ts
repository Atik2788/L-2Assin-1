{
    // task 1 start ***************
    function formatString(input: string, toUpper?:boolean): string{   
        if(toUpper === false){
            return input.toLocaleLowerCase()
        }
        else{
            return input.toUpperCase()
        }
    }   

    // console.log(formatString("Hello"));
    // console.log(formatString("Jello", true));
    // console.log(formatString("Mairallo", false));
    // task 1 end ***************



    // task 2 start with reduce ***************    
    const books = [
        { title: "Book A", rating: 2.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
        { title: "Book D", rating: 3.0 },
        { title: "Book E", rating: 4.3 },
        { title: "Book F", rating: 5.3 },
      ];


    type Book = {
        title: string;
        rating: number;
    };

    function filterByRating(books: Book[]): Book[]{
        return books.reduce((acc: Book[], book: Book) =>{
            if(book.rating >= 4){
                acc.push(book)
            }
            return acc;
        }, [])
    }
    //   console.log("With Reduce", filterByRating(books));

    // OR............
    // task 2 start with filter ***************
    function filterByRating2(books: Book[]):Book[]{
        const result = books.filter(book => book.rating >= 4)
        return result;
    }
    // console.log("With filter", filterByRating2(books));
    // task 2 end ***************




    // task 3 start ***************
    function concatenateArrays<T>(...arrays: T[][]): T[]{
        let result: T[] = []
        for(const arr of arrays){
            result = result.concat(arr)
        }
       return result
    }

    // console.log(concatenateArrays(["a", "b"], ["c"]));       // Output: ["a", "b", "c"]
    // console.log(concatenateArrays([1, 2], [3, 4], [5]));     // Output: [1, 2, 3, 4, 5]
    // task 3 end ***************


    


    // task 4 start ***************
    class Vehicle {
        constructor(public make: string, public year: number){

        }
        getInfo(){
            console.log(`Make: ${this.make}, Year: ${this.year}`);
        }
    }

    class Car extends Vehicle{
        constructor(make: string, year: number, public model: string){
            super(make, year)
        }
        getModel(){
            console.log(`Model: ${this.model}`);
        }

    }
    const myCar = new Car("Toyota", 2020, "Corolla");
    // myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
    // myCar.getModel();  // Output: "Model: Corolla"
        // task 4 End ***************





    // task 5 start ***************

    function processValue(value: string | number): number {
        if (typeof value === "string") {
            const result = value.length;
            console.log(result);
            return result
        }
        else{
           const result =  value * 2
           console.log(result);
           return result
        }       
    }

    processValue("helloaaaa");
    processValue(10);
    console.log(processValue('Next Lavel Web Development'))    
    // task 5 End ***************





    // task 6 Start ***************
    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
      ];

    interface Product {
        name: string;
        price: number;
      }
      
      function getMostExpensiveProduct(products: Product[]): Product | null{
        return products.reduce((acc: Product[], product: Product) =>{
            if(product.price > acc.price)
        }, [])
        return acc;
      }

      getMostExpensiveProduct(products); // Output: { name: "Bag", price: 50 }
 
    // task 6 End ***************







}
