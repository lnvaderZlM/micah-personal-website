import Link from 'next/link';
import Image from 'next/image';


export interface Media {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  url: string;
  mime: string;
  size: number;
}
export type Work = {
  id: number;
  Title: string;
  Teaser: Media;
  start: string;
  end: string;
  Content: object;
  Slug: string;
}

export type WorkContainer = {
  work: Work;
}

export const WorkTeaser = ({work}:WorkContainer) => {
  console.log(work);
  return (
    <Link href={`/work/${work.slug}`} className="flex-1 text-center">
        {/* work icon, bordered, with title, and hover state*/}
        { work.Teaser && 
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${work.Teaser.url}`}
            width="80"
            height="80"
            alt={work.Teaser.alternativeText ?? `${work.Title} teaser`}
            className="m-auto pb-1"
          />
        }
        <h4>{work.Title}</h4>
    </Link>
  );
};

export default WorkTeaser;