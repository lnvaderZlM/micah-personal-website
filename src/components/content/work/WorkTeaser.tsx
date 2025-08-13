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

export type Skill = {
  id: number;
  Name: string;
}
export type Work = {
  id: number;
  Title: string;
  Teaser: Media;
  Hero: Media;
  Start: string;
  End: string;
  Content: object;
  slug: string;
  Company: string;
  skills: Skill[];
  bottom_images: Media[];
  work_type: string;
}

export type WorkContainer = {
  work: Work;
}

export const WorkTeaser = ({work}:WorkContainer) => {
  return (
    <Link href={`/work/${work.slug}`} className="sm:text-center p-4 rounded-sm flex flex-row items-center gap-4 sm:gap-2 sm:flex-col border border-solid 
      border-border-light hover:border-border-hover-light
      dark:border-border-dark dark:hover:border-border-hover-dark dark:hover:bg-border-bg-hover-dark">
        {/* work icon, bordered, with title, and hover state*/}
        { work.Teaser && 
          <Image
            src={`${work.Teaser.url}`}
            width="80"
            height="80"
            alt={work.Teaser.alternativeText ?? `${work.Title} teaser`}
            className="sm:m-auto pb-1 rounded-lg w-10 sm:w-20"
          />
        }
        <h4 className="font-bold">{work.Title}</h4>
    </Link>
  );
};

export default WorkTeaser;