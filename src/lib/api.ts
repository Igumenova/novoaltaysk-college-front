// import { useSWR } from "swr";
import { NewsItem } from "@/types/news";

export async function fetchNews(): Promise<NewsItem[]> {
  const res = await fetch(process.env.STRAPI_API_URL + `/api/news?populate=*`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json.data;
}

export async function fetchNewsById(id: string) {
  const res = await fetch(
    process.env.STRAPI_API_URL + `/api/news-items/${id}?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) return null;

  const json = await res.json();

  return json.data;
}

// export function useNewsById(id: string) {
//   const { data, error, isLoading } = useSWR(
//     `${API_URL}/news/${id}?populate=*`,
//     fetcher
//   );

//   return {
//     newsItem: data?.data as NewsItem | undefined,
//     isLoading,
//     isError: error,
//   };
// }
