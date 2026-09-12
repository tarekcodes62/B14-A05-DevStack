import { use } from 'react';
import TechnologyCards from './TechnologyCards';
import type { ITechnologyType } from '../../types/technologyType';

const TechnologyCardSection = ({
  technologyPromise,
  selectedTechnologies,
  setSelectedTechnologies,
}: {
  technologyPromise: Promise<ITechnologyType[]>;
  selectedTechnologies: ITechnologyType[];
  setSelectedTechnologies: React.Dispatch<
    React.SetStateAction<ITechnologyType[]>
  >;
}) => {
  const technologyData = use(technologyPromise);
  return (
    <div>
      {' '}
      <ul className="grid grid-cols-1 gap-7 lg:grid-cols-2  xl:grid-cols-3  mt-10">
        {technologyData.map(technology => (
          <li key={technology.id}>
            <TechnologyCards
              technology={technology}
              selectedTechnologies={selectedTechnologies}
              setSelectedTechnologies={setSelectedTechnologies}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnologyCardSection;
