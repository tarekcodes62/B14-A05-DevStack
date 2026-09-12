import type { ITechnologyType } from '../../types/technologyType';
import { Bounce, toast } from 'react-toastify';

const TechnologyCards = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: {
  technology: ITechnologyType;
  selectedTechnologies: ITechnologyType[];
  setSelectedTechnologies: React.Dispatch<
    React.SetStateAction<ITechnologyType[]>
  >;
}) => {
  const { name, description, category, difficulty, rating, badge, icon } =
    technology;

  const isDisabled = selectedTechnologies.some(t => t.id === technology.id);

  const handleAddToStack = (technology: ITechnologyType) => {
    setSelectedTechnologies(prev => [...prev, technology]);
    toast.success(`${name} is added to your stack!`, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };
  return (
    <>
      <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg w-xs lg:w-2xs h-70 mx-auto ">
        {/* Top */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex h-7 w-7 items-center justify-center">
            <img src={icon} alt={name} className="h-7 w-7 object-contain" />
          </div>

          <span className="rounded-full border border-sky-100 bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-600">
            {badge}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="mb-1.5 text-lg font-semibold text-slate-900">
            {name}
          </h3>

          <p className=" text-sm text-slate-500">{description}</p>
        </div>

        {/* Bottom Info */}
        <div className="mt-3 grid grid-cols-[auto_1fr_auto] items-center gap-2 border-t border-slate-100 pt-2.5 text-xs">
          {/* Category */}
          <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
            {category}
          </span>

          {/* Difficulty */}
          <span className="text-center text-slate-500">{difficulty}</span>

          {/* Rating */}
          <span className="flex items-center gap-1 text-slate-700">
            <span className="text-amber-500">★</span>
            {rating}
          </span>
        </div>

        {/* Button */}
        <button
          disabled={isDisabled}
          className={`mt-2.5 w-full rounded-md bg-[#080d1a] px-3 py-2 text-sm font-medium  transition ${isDisabled ? 'bg-[#fde9f2] text-[#DB2777]' : 'hover:bg-[#0f172a] text-white'}`}
          onClick={() => handleAddToStack(technology)}
        >
          {isDisabled ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </>
  );
};

export default TechnologyCards;
