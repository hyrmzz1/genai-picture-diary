import Lnb from "../components/Lnb";

const Mypage = () => {
  return (
    <div className="flex">
      <Lnb /> {/* Lnb 컴포넌트 추가 */}
      <div className="mypage-content">
        <div className="profile-section">
          <img src={image13} alt="Profile" className="profile-image" />
        </div>
        <div className="info-section">
          <div className="info-group">
            <p className="info-title">기본정보</p>
            <p className="info-label">닉네임</p>
            <div className="info-value">
              <p>별명</p>
              <p>0/10</p>
            </div>
            <p className="info-label">이름</p>
            <div className="info-value">
              <p>김초딩</p>
            </div>
            <p className="info-label">아이디</p>
            <div className="info-value">
              <p>abcde123</p>
            </div>
            <p className="info-label">비밀번호</p>
            <div className="info-value">
              <div className="password-dots">
                <span>•</span>
                <span>•</span>
                <span>•</span>
                <span>•</span>
                <span>•</span>
                <span>•</span>
                <span>•</span>
                <span>•</span>
              </div>
              <button className="change-button">변경</button>
            </div>
          </div>
          <div className="action-group">
            <button className="update-button">정보수정</button>
            <div className="delete-account">
              <p>회원탈퇴</p>
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18.983L15 12.983L9 6.98303"
                  stroke="#777777"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
