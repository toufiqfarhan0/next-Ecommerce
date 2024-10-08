import { SearchParamsTypes } from "@/types/SearchParams";
import formatPrice from "@/util/PriceFormat";
import Image from "next/image";
import AddCart from "./AddCart";

export default async function Product({ searchParams }: SearchParamsTypes) {
  return (
    <div className="flex flex-col 2xl:flex-row items-center justify-between gap-24 text-gray-700">
      <Image
        src={searchParams.image}
        alt={searchParams.name}
        width={400}
        height={400}
        className="w-40 h-40 rounded-lg"
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
        <AddCart {...searchParams} />
      </div>
    </div>
  );
}
