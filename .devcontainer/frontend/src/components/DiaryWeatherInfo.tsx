import { useState, useEffect } from "react";
import sunIcon from "../assets/sun.svg";
import cloudyIcon from "../assets/cloudy.svg";
import rainIcon from "../assets/rain.svg";
import snowIcon from "../assets/snow.svg";
import suncloundIcon from "../assets/sun_cloud.svg";

const weatherIcons = [
  { id: 1, icon: sunIcon, alt: "맑음" },
  { id: 2, icon: suncloundIcon, alt: "약간 흐림" },
  { id: 3, icon: cloudyIcon, alt: "흐림" },
  { id: 4, icon: rainIcon, alt: "비" },
  { id: 5, icon: snowIcon, alt: "눈" },
];

const DiaryWeatherInfo = () => {
  const [currentDate, setCurrentDate] = useState({
    year: "",
    month: "",
    day: "",
    weekDay: "",
  });
  const [selectedWeather, setSelectedWeather] = useState<number | null>(null);

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekDay = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];

    setCurrentDate({
      year: String(year),
      month: String(month),
      day: String(day),
      weekDay: weekDay,
    });
  }, []);

  const handleWeatherSelect = (id: number) => {
    if (selectedWeather === id) {
      setSelectedWeather(null); // 이미 선택된 아이콘을 다시 클릭하면 선택 해제
    } else {
      setSelectedWeather(id); // 새로운 아이콘 선택
    }
  };

  return (
    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0">
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[37px] gap-7 px-7 py-2.5 border border-[#e2e2e2]">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-3">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
            <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#232527] font-ownglyph">
              {currentDate.year}
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#232527] font-ownglyph">
              년
            </p>
          </div>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
            <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#232527] font-ownglyph">
              {currentDate.month}
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#232527] font-ownglyph">
              월
            </p>
          </div>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
            <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#232527] font-ownglyph">
              {currentDate.day}
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#232527] font-ownglyph">
              일
            </p>
          </div>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
            <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#232527] font-ownglyph">
              {currentDate.weekDay}
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#232527] font-ownglyph">
              요일
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-grow h-[37px] relative gap-3 px-4 py-2.5 border-t border-r border-b border-l-0 border-[#e2e2e2]">
        <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#232527] font-ownglyph">
          오늘의 날씨 :
        </p>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          {weatherIcons.map((weather) => (
            <img
              key={weather.id}
              src={weather.icon}
              alt={weather.alt}
              onClick={() => handleWeatherSelect(weather.id)}
              className={`cursor-pointer w-6 h-6 rounded ${
                selectedWeather === weather.id
                  ? "filter-black" // 실제 색상 필터링으로 대체해야 함
                  : ""
              }`}
              style={
                selectedWeather === weather.id
                  ? {
                      filter:
                        "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                    }
                  : {}
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiaryWeatherInfo;
