import {WorkTeaser, Work} from './content/work/WorkTeaser';
import HeroLayout from './layouts/HeroLayout';
import ProfileImage from './ProfileImage';

type HomeProps = {
  data: Work[];
}

const WorkGrid = ({data}:HomeProps) => {
  const cols = Math.min(data.length, 4);
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-4`}>
      {data.map(work => {
        return (
          <WorkTeaser key={work.id} work={work}/>
        )
      })}
    </div>
  )
}


export default function Homepage({data}:HomeProps) {
  const jobs = [];
  const projects = [];
  for(const work of data) {
    if(work.work_type == "Work") {
      jobs.push(work);
    }
    else {
      projects.push(work);
    }
  }
  return (
    <HeroLayout align="text-center items-center">
      <ProfileImage
        imgSrc="/about_hero.jpg"
        altText="about me"
      />
        <p className="w-full text-3xl mb-8 pt-6">
          {`Hey! I'm Micah Alconcel, a Seattle-based web developer with experience building websites in Drupal and React/Next.js. Here's a portfolio of some of my work!`}
        </p>
        <h2 className="p-4 text-xl">Work Experience</h2>
        <WorkGrid data={jobs}/>
        <h2 className="mt-4 p-4 text-xl">Projects</h2>
        <WorkGrid data={projects}/>
    </HeroLayout>
  );
}