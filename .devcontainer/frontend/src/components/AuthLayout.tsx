import { Outlet } from "react-router-dom";
import Gnb from "./Gnb";
import Snb from "./Snb";

const AuthLayout = () => {
  return (
    <article className="container">
      <div className="w-screen h-screen flex flex-col">
        <Gnb />
        <div className="flex flex-1">
          <Snb />
          <div className="flex-1 bg-[#F7F8F9]">
            <Outlet />
          </div>
        </div>
      </div>
    </article>
  );
};

export default AuthLayout;
