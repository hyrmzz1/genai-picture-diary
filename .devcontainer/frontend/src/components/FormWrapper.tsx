import { ReactNode } from "react";
import PageLogo from "./html/PageLogo";

interface FormWrapperProps {
  title: string;
  children: ReactNode;
  titleClassname?: string;
  customWidth?: string;
}

const FormWrapper = ({
  title,
  children,
  titleClassname = "",
  customWidth = "",
}: FormWrapperProps) => {
  return (
    <>
      <PageLogo />
      <div className="flex justify-center">
        <div
          className={customWidth === "" ? "w-[480px]" : `w-[${customWidth}]`}
        >
          <form action="">
            <h1 className={`font-bold text-[24px] ${titleClassname}`}>
              {title}
            </h1>
            <div>{children}</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormWrapper;
