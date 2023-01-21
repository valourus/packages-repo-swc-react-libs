import { FC } from "react";

interface PageProps {
  params: {
    route: string[];
  },
  searchParams?: Record<string, string>;
}

const Page = async ({ params }: PageProps): Promise<JSX.Element> => {
  console.log(params);
  const data = await fetch('https://dummyjson.com/products/1').then(e => e.json());

  return <main>{JSON.stringify(data)}</main>
}

export default Page as unknown as FC<PageProps>;
