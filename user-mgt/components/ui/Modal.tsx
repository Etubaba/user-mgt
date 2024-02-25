import { ModalType } from "@/types/components";
import { IoMdClose } from "react-icons/io";

const Modal = ({ open, title, onClose, children }: ModalType) => {
  return (
    <>
      {open && (
        <div
          className={
            "fixed z-50   left-0  bg-black/30   top-0  w-full h-screen flex justify-center items-center"
          }
        >
          <div className="bg-white  shadow-sm rounded-md animate__animated mt-3 animate__fadeIn w-fit py-5 px-5">
            <div
              className={
                title !== undefined
                  ? "flex justify-between"
                  : "flex justify-end"
              }
            >
              {title !== undefined && (
                <p className="text-lg text-title  font-semibold">{title}</p>
              )}
              <IoMdClose
                className={
                  title !== undefined
                    ? "cursor-pointer text-title  right-[27%] md:right-[27%] lg:right-[32%]  mt-1 md:mt-2"
                    : "cursor-pointer text-title  absolute    mt-1 md:mt-2"
                }
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
