import {WorkTeaser, Work} from './content/work/WorkTeaser';
import HeroLayout from './layouts/HeroLayout';
import ProfileImage from './ProfileImage';

type HomeProps = {
  data: Work[];
}


export default function Homepage({data}:HomeProps) {
  return (
    <HeroLayout align="text-center items-center">
      <ProfileImage
        imgSrc="/about_hero.jpg"
        alt="about me"
      />
        <p className="w-full text-3xl mb-8 pt-6">
          {`Hey! I'm Micah Alconcel, a Seattle-based web developer with experience building websites in Drupal and React/Next.js. Here's a portfolio of some of my work!`}
        </p>
        <div className="flex">
          {data.map(work => {
            return (
              <WorkTeaser key={work.id} work={work}/>
            )
          })}
        </div>
    </HeroLayout>
  );
}