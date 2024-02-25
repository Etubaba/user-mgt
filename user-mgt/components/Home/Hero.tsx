const Banner = () => {
  return (
    <div className="bg-primary p-7 h-[450px]">
      <div className="md:max-w-[90%] mx-auto flex flex-row h-full items-center">
        <div className="text-white md:w-[60%] pt-5">
          <h2 className="capitalize font-bold text-2xl md:text-4xl pb-2">
            User Management{" "}
          </h2>
          <h2 className="capitalize font-bold text-2xl md:text-4xl pb-2">
            User control panel
          </h2>
          <p className="text-sm font-thin md:w-[80%] pb-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="w-[40%] hidden lg:inline-block pt-3 ">
          <div className="relative w-[430px] h-[440px]">
            <img
              src={"/bannergirlnew.png"}
              alt="Hero"
              className=" w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
