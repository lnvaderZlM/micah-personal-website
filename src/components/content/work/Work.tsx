'use client';

import {WorkContainer, Skill} from './WorkTeaser';
import HeroLayout from '../../../components/layouts/HeroLayout';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import {textAccentDarkToggle} from '../../utils';
import Image from 'next/image';
import Link from 'next/link';

export const WorkTeaser = ({work}:WorkContainer) => {
  console.log(work);
  const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
  const start = new Date(work.Start);
  const startFormatted = start.toLocaleString('default', dateOptions).toUpperCase();

  const end = new Date(work.End);
  const endFormatted = end.toLocaleString('default', dateOptions).toUpperCase();

  return (
    <HeroLayout align="">
      <h1 className="mb-2 text-3xl">
        <span className={`font-bold ${textAccentDarkToggle}`}>{work.Title} </span>
        at
        <span className={`font-bold ${textAccentDarkToggle}`}> {work.Company}</span>
      </h1>
      <div className="flex justify-start items-center mb-4 gap-2 text-lg">
        <div className="font-bold">{startFormatted}</div>
        <div>{"-"}</div>
        <div className="font-bold">{endFormatted}</div>
      </div>
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
          }}
        />
      }
    </HeroLayout>
  );
};

export default WorkTeaser;