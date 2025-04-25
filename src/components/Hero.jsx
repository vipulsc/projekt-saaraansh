import Search from "./Search";
const Hero = () => {
  return (
    <>
      {/* <div className="flex justify-center min-h-screen">
        <div className="flex  gap-2 max-w-screen-lg w-full">
          <div className="flex-1 w-full sm:w-auto pr-10">
            <Search />
          </div>
          <div className="flex-1 w-full sm:w-auto">
            <h2>Feature 2</h2>
            <p>Details about another feature</p>
          </div>
        </div>
      </div> */}
      <div className="px-6 md:px-50 sm:6">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center w-full">
          <div className="w-full mb-4 lg:mb-0">
            <Search />
          </div>
          <div className="w-full lg:w-auto text-center lg:text-right">
            SHOWWWWWW
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
