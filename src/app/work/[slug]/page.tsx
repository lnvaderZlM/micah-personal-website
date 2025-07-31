import Work from '../../../components/content/work/Work';


type WorkPageProps = {
  params: Promise<{slug: string}>;
};

async function getWorkBySlug(slug:string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/works?filters[slug][$eq]=${slug}&populate[0]=Hero&populate[1]=skills`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
    cache: 'force-cache', // This is the default – like getStaticProps
  });

  const data = await res.json();
  if (!data.data.length) return null

  return data.data[0];
}

export default async function WorkPage({ params }:WorkPageProps) {
  const slug = await params;
  const work = await getWorkBySlug(slug.slug);

  if (!work) {
    return <div>Work not found</div> // Optionally redirect or throw 404
  }

  return (
    <Work work={work}/>
  )
}