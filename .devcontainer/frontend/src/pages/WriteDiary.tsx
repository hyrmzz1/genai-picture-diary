import DiarySidebar from "../components/DiarySidebar"; // 사이드바
import DiaryContent from "../components/DiaryContent"; // 사이드바

const WriteDiary = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <DiarySidebar /> {/* 헤더 아래, 왼쪽에 사이드바 추가 */}
        <main className="flex-1">
          <DiaryContent /> {/* 메인 컨텐츠 추가 */}
        </main>
      </div>
    </div>
  );
};

export default WriteDiary;
