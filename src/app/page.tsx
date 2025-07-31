import Homepage from "../components/Home";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/works?populate[0]=Teaser`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
    cache: 'force-cache', // This is the default – like getStaticProps
  });
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <Homepage data={data.data}/>
  );
}
