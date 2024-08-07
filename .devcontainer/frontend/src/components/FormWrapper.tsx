import { ReactNode } from "react";
import PageLogo from "./html/PageLogo";

interface FormWrapperProps {
  title: string;
  children: ReactNode;
}

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <PageLogo />
      <div className="flex justify-center">
        <div className="w-[480px]">
          <form action="">
            <h1 className="font-bold text-[24px]">{title}</h1>
            <div>{children}</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormWrapper;
