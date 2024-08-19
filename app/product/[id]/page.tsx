import { SearchParamsTypes } from "@/types/SearchParams";
import formatPrice from "@/util/PriceFormat";
import Image from "next/image";

export default async function Product({ searchParams }: SearchParamsTypes) {
  return (
    <div className="flex items-center justify-between gap-24 p-12 text-gray-700">
      <Image
        src={searchParams.image}
        alt={searchParams.name}
        width={400}
        height={400}
        className="w-50 h-50 rounded-lg"
      />
      <div className="font-medium text-gray-700">
        <h1 className="text-2xl py-2">{searchParams.name}</h1>
        <p className="py-2">{searchParams.description}</p>
        <p className="py-2">{searchParams.features}</p>
        <div className="flex gap-2">
            <p className="font-bold text-teal-600">
                {searchParams.unit_amount && formatPrice(searchParams.unit_amount)}
            </p>
        </div>
        <button className="my-12 text-white py-2 px-6 font-medium rounded-md bg-blue-600">
            Add to Cart
        </button>
      </div>
    </div>
  );
}
