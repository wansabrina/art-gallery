import { useQuery } from "react-query";
import Image from "next/image";
import { useState } from "react";

export const API_URL = "https://api.harvardartmuseums.org/image";
export const API_KEY = "4204f2f1-735e-46bc-aa71-2748c18dc7ab";

type Artwork = {
  id: string;
  title: string;
  imageUrl: string;
};

type ArtworkResponse = {
  records: {
    id: number;
    title: string;
    baseimageurl: string;
  }[];
};

const formatArtworkResponse = (data: ArtworkResponse): Artwork[] => {
  return data.records.map((item) => ({
    id: String(item.id),
    title: item.title,
    imageUrl: item.baseimageurl,
  }));
};


const getArtworks = async (page: number): Promise<Artwork[]> => {
  const response = await fetch(
    `${API_URL}?apikey=${API_KEY}&page=${page}&size=30`
  );
  const data = await response.json();
  return formatArtworkResponse(data);
};

const Artworks = () => {
  const [page, setPage] = useState(10);

  const { isLoading, isError, data, error, isFetching } = useQuery<Artwork[], Error>(
    ["artworks", page],
    () => getArtworks(page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false
    }
  );

  const handleNextPage = () => {
    setPage(page => page + 1);
  };

  if (isLoading && !isFetching) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <section>
      <div className="h-full p-24 mb-20">
        <ul className="grid grid-cols-10 gap-2">
          {data?.map(({ id, title, imageUrl }) => (
            <li key={id} className="flex flex-col">
              <Image src={imageUrl} alt={title} height={200} width={200} />
              <h2 className="mt-2">{title}</h2>
            </li>
          ))}
        </ul>
        {data?.length && (
          <>
            {isFetching && <div>Loading more...</div>}
            <button className='bg-yellow-500 py-2 pr-4 pl-3 rounded-md mt-3 hover:bg-yellow-600' onClick={handleNextPage}>Next</button>
          </>
        )}
      </div>
    </section>
  );  
};

export default Artworks;
