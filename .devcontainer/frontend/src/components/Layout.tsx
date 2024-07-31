import { Link, Outlet } from "react-router-dom";

/**
 * Layout 예시 코드입니다.
 * 어떤 내용이 들어가야 하는 컴포넌트인지 공유하기 위함이므로, 구조만 참고하시면 됩니다.
 * 스타일은 임의로 지정된 것이므로, 디자인 시안에 맞게 구현해주세요.
 */
const Layout = () => {
  return (
    <>
      <article className="container mx-auto px-5">
        <div className="max-w-[1100px] mx-auto">
          {/* 헤더 영역 */}
          <header className="flex justify-between items-center">
            <Link to="/">
              <h1 className="">서비스 명</h1>
            </Link>
            <nav>
              <ul className="flex gap-5">
                <li>
                  {/* 비로그인 상태에선 해당 버튼 노출 X */}
                  <Link to="/about">Mypage</Link>
                </li>
                <li>
                  {/* 로그인 상태에 따라 다르게 노출 */}
                  <Link to="/write">로그인/로그아웃</Link>
                </li>
              </ul>
            </nav>
          </header>
          {/* 각 페이지 컴포넌트가 보여져야 하는 부분에 Outlet 컴포넌트를 넣는다. 즉, ContentSection이다. */}
          <Outlet />
        </div>
      </article>
      <footer className="bg-[#F5F5F5] py-[36px] "></footer>
    </>
  );
};
export default Layout;
