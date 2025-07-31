'use client';

import {WorkContainer} from './WorkTeaser';
import HeroLayout from '../../../components/layouts/HeroLayout';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import {textAccentDarkToggle} from '../../utils';

export const WorkTeaser = ({work}:WorkContainer) => {
  return (
    <HeroLayout align="">
      <h1 className="mb-8 text-3xl">
        <span className={`font-bold ${textAccentDarkToggle}`}>{work.Title} </span>
        at
        <span className={`font-bold ${textAccentDarkToggle}`}> {work.Company}</span>
      </h1>
      <BlocksRenderer content={work.Content}
        blocks={{
          paragraph: ({ children }) => <p className="text-neutral900 mb-4 text-lg">{children}</p>
        }}
      />
    </HeroLayout>
  );
};

export default WorkTeaser;