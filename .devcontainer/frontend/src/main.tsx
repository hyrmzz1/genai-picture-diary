import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";

import router from "./router/index";
import { RouterProvider } from "react-router-dom";

// // 모킹 서버 시작
// const startMockServer = async () => {
//   if (import.meta.env.MODE === "development") {
//     const { server } = await import("./server/browser");
//     server.start();
//   }
// };

// // 모킹 서버 시작 후 애플리케이션 렌더링
// startMockServer().then(() => {
//   ReactDOM.createRoot(document.getElementById("root")!).render(
//     <React.StrictMode>
//       <RouterProvider router={router} />
//     </React.StrictMode>
//   );
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
