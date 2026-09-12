import { Bounce, toast } from "react-toastify";
import type { ITechnologyType } from "../../types/technologyType";
import { RxCross2 } from 'react-icons/rx';



const Stack = ({ selectedTechnologies, setSelectedTechnologies}: { selectedTechnologies: ITechnologyType[]; setSelectedTechnologies: React.Dispatch<React.SetStateAction<ITechnologyType[]>>}) => {

  
  return (
    <div className="w-xs h-fit rounded-xl p-4 my-10 shadow-md border border-slate-200 bg-white mx-auto md:mx-7 ">
      <h1 className="text-xl font-semibold ">Your Stack</h1>
      <p className="text-[#94A3B8] text-sm">
        {selectedTechnologies.length
          ? `${selectedTechnologies.length} technology selected`
          : `No technologies selected yet.`}
      </p>
      <div className="mt-5">
        {selectedTechnologies.length > 0 ? (
          <ul className="mt-3 space-y-2">
            {selectedTechnologies.map(tech => (
              <li
                key={tech.id}
                className="flex items-center justify-between border border-slate-200 rounded-lg p-2 shadow-sm"
              >
                <div className="selectedCard flex items-center gap-3">
                  <div className="logo">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      width="30px"
                      height="30px"
                    />
                  </div>
                  <div className="desc">
                    <h3 className="font-medium">{tech.name}</h3>
                    <p className="text-sm text-[#94A3B8]">{tech.category}</p>
                  </div>
                </div>

                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => {
                    setSelectedTechnologies(prev =>
                      prev.filter(t => t.id !== tech.id),
                    );
                    toast.error(`${tech.name} is removed from your stack!`, {
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
                  }}
                >
                  <RxCross2 className="text-lg cursor-pointer" />
                </button>
              </li>
            ))}
            <button
              className="mt-5 w-full rounded-md btn btn-error btn-outline"
              onClick={() => {
                setSelectedTechnologies([]);
                toast.error('All technologies are removed from your stack!', {
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
              }}
            >
              Remove All
            </button>
          </ul>
        ) : (
          <p className="w-full border-dashed border border-[#ced4db] rounded-lg p-4 text-center text-[#94A3B8] ">
            Your stack is empty
          </p>
        )}
      </div>
    </div>
  );
}

export default Stack