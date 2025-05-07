{
    // task 1 start ***************
    function formatString(input: string, booleanValue?:boolean){   
        if(booleanValue === false){
            return input.toLocaleLowerCase()
        }
        else if(booleanValue){
            return input.toUpperCase()
        }
        else{
            return input.toUpperCase()
        }
    }   

    console.log(formatString("Hello"));
    console.log(formatString("Jello", true));
    console.log(formatString("Mairallo", false));
    // task 1 end ***************



    // task 2 start ***************
    type Product = {
        title: string;
        rating: number;
    };

    function filterByRating(products: Product[]): Product[] {
        return products.reduce((acc: Product[], product: Product) =>{
            if(product.rating >=4){
                acc.push(product)
            }
            return acc;
        }, [])
    }

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
        { title: "Book C", rating: 3.0 },
        { title: "Book C", rating: 4.3 },
      ];

      console.log(filterByRating(books));
    // task 2 end ***************




}


/* if(typeof input === 'string'){
    if(booleanValue){
     return input.toUpperCase()
    }           
 } */