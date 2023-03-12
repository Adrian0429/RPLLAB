import { useQuery } from "react-query";
import { getKeyboard } from "../api/rq-amazon";
import Image from "next/image";
import Link from "next/link";
import RedButton from "components/GreenButton";
import AmazonPoster from "components/shared/AmazonPoster";

interface Product {
  position:number;
  title: string;
  prices: number;
  image: string;

}

interface ApiResponse {
  search_results: Product[];
}

const CustomKeyboards = () => {
  const { isLoading, isError, data, error } = useQuery<ApiResponse>(
    "Custom Keyboard",
    () => getKeyboard()
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <>Error: {error}</>;

  return (
    <>
      <main className="h-full bg-rose-200">
        <div className="relative">
          <div className="absolute left-10 top-12">
            <RedButton url="/" title="Go back" />
          </div>
          <div className="absolute right-10 top-12">
            <RedButton url="/" title="see others" />
          </div>
          <div className="text-center items-center text-3xl pt-12 font-semibold">
            <h1>Here's Amazon's Top Custom Keyboards</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 py-4 max-w-2xl mx-auto">
          {data.search_results.map((Product) => (
            <div
              key={Product.position}
              className="bg-white p-2 m-1 rounded-lg flex flex-col items-center"
            >
              <AmazonPoster title={Product.title} prices={Product.prices[0]} image={Product.image} link={Product.asin}/>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default CustomKeyboards;
