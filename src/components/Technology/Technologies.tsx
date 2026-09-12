import { Suspense, useState } from 'react';
import type { ITechnologyType } from '../../types/technologyType';

import Stack from './Stack';
// import TechnologyCards from "./TechnologyCards";
import TechnologyCardSection from './TechnologyCardSection';

const technologyPromise = async (): Promise<ITechnologyType[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};

const Technologies = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnologyType[]
  >([]);

  const [technologyPromisefunc] = useState(() => technologyPromise());
  // const technologyData = use(technologyPromise);
  return (
    <div className="border-b border-slate-200 pb-10 pl-5">
      <div className="technology-cards container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-5 text-[#0F172A] text-center md:text-start">
          Explore the{' '}
          <span className="brand-gradient bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-[#64748B] text-lg text-center md:text-start">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[60%_40%] xl:grid-cols-[70%_30%]  2xl:grid-cols-[65%_35%]  gap-3">
          <Suspense
            fallback={
              <div className="text-xl mt-5 text-center">Loading...</div>
            }
          >
            <TechnologyCardSection
              technologyPromise={technologyPromisefunc}
              selectedTechnologies={selectedTechnologies}
              setSelectedTechnologies={setSelectedTechnologies}
            />
          </Suspense>
          <Stack
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
