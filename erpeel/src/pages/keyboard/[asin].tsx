import Navbar from "components/Navbar";
import Details from "components/shared/details";
import React from "react";
import { useQuery } from "react-query";
import { getKeyboard } from "../api/rq-amazon";
import { useRouter } from "next/router";

  
type KeyboardDetail = {
    asin:string;
    imagepath:string;
    title:string;
    price:number;
    rating:number;
}
  const CustomKeyboards = () => {

    const router = useRouter();
    const {asin} = router.query
    const { isLoading, isError, data, error } = useQuery(asin , ()=> getKeyboard(String(asin)))
  
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <>Error: {error}</>;

    

  return (
    
      <main className="min-h-screen bg-gray-200">
        <div className="flex justify-center py-10">
            <Details
            imagepath={data.image}
            title={data.title}
            price={data.price}
            rating={data.rating}
            />
        </div>

      </main>
    
  )
}

export default CustomKeyboards;
