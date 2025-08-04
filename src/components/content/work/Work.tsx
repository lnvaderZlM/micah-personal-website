'use client';

import {WorkContainer, Skill} from './WorkTeaser';
import HeroLayout from '../../../components/layouts/HeroLayout';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import {textAccentDarkToggle} from '../../utils';
import Image from 'next/image';
import Link from 'next/link';

export const WorkTeaser = ({work}:WorkContainer) => {
  const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
  let startFormatted, endFormatted;
  if(work.Start) {
    const start = new Date(work.Start);
    startFormatted = start.toLocaleString('default', dateOptions).toUpperCase();

    const end = new Date(work.End);
    endFormatted = end.toLocaleString('default', dateOptions).toUpperCase();
  }
  

  return (
    <HeroLayout align="">
      <h1 className="mb-2 text-3xl">
        <span className={`font-bold ${textAccentDarkToggle}`}>{work.Title} </span>
        {work.Company && 
          <span>{`at`}<span className={`font-bold ${textAccentDarkToggle}`}> {work.Company}</span></span>
        }
        
      </h1>
      {startFormatted && 
        <div className="flex justify-start items-center mb-4 gap-2 text-lg">
          <div className="font-bold">{startFormatted}</div>
          <div>{"-"}</div>
          <div className="font-bold">{endFormatted}</div>
        </div>
      }
      
      <div className="flex gap-2 mb-4">
        {
          work.skills.map((skill) => {
            return (
              <div className="flex px-4 py-2 rounded-xl border border-solid text-center items-center
                border-border-light
                dark:border-border-dark
              " key={skill.id}>
                {skill.Name}
              </div>
            )
          })
        }
      </div>
      { work.Hero &&
        <Image
            src={`${work.Hero.url}`}
            width="800"
            height="421"
            alt={work.Hero.alternativeText ?? `${work.Title} teaser`}
            className="w-full mb-8"
        />
      }
      {
        <BlocksRenderer content={Array.isArray(work.Content) ? work.Content : []}
          blocks={{
            paragraph: ({ children }) => <p className="text-neutral900 mb-4 text-lg">{children}</p>,
            link: ({ children, url }) => <Link href={url} target="_blank">{children}</Link>,
            list: ({ children }) => <ul className="text-lg list-disc pl-8 mb-4">{children}</ul>,
          }}
        />
      }
      <div className="grid-cols-2 grid gap-4 mb-6">
        { work.bottom_images && 
          work.bottom_images.map(image => {
            return (
              <Image
                src={`${image.url}`}
                width="400"
                height="210"
                alt={image.alternativeText ?? `${work.Title} preview`}
                className="w-full"
                key={image.id}
            />
            )
          })
        }
      </div>
    </HeroLayout>
  );
};

export default WorkTeaser;