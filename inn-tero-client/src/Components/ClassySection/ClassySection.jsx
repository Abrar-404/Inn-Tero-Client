import ClassySlider from './ClassySlider';

const ClassySection = () => {
  return (
    <div>
      <div className="bg-[#0A0807] border-2 border-red-500">
        <div>
          <div className="mx-auto flex justify-end z-10 border-2 relative border-red-500">
            <ClassySlider></ClassySlider>
            <div className="absolute z-50">
              <h1 className="text-4xl text-white font-cardo  mr-[500px] mt-[30px]">
                STAY CLASSY, FEEL CLASSY
              </h1>
              <div className="flex justify-start ml-20">
                <h1 className="text-xl text-[#FB9541]">
                  <i>Contemporary</i>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassySection;
