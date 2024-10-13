export default function CountryName({params}:any){

    const countries:{
        name: string
        capital: string
        population: number
    }[]=[{
        name: "Pakistan",
        capital: "Islamabad",
        population: 241495112
        },
       {
        name: "India",
        capital: "Delhi",
        population: 1450935791 
        },
       {
        name: "China",
        capital: "Beijing",
        population: 1419321278 
        },
       {
        name: "Russia",
        capital: "Moscow",
        population: 144820423 
        },
       {
        name: "Egypt",
        capital: "Cairo",
        population: 116538258 
       }     
        ];


        function findCountry(country_url:string){
            return countries.find(country=> country.name.toLowerCase() == country_url.toLowerCase());
        }  
        let result=  findCountry(params.country_name)
    
         
    return(
        <div>
            {
                result ? (
                    <>
                    &nbsp;<u><b><h1 className="flex justify-center">COUNTRY DETAILS</h1></b></u>
                    <h2 className="flex justify-center">Country Name : {result.name}</h2>
                    <h2 className="flex justify-center">Country Capital : {result.capital}</h2>
                    <h2 className="flex justify-center">Country Population : {result.population}</h2>
                    </>
                ) : (
                    <h1>{params.country_name} not found</h1>
                )
            }
            
        </div>
    )
 }