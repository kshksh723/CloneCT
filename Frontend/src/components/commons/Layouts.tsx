import React, { useEffect, useState } from "react";

type Banner = {
  gradient: string;
  image: string;
};

const banners: Banner[] = [
  {
    gradient: "bg-gradient-to-r from-rose-100 via-orange-100 to-amber-100",
    image: "/banners/banner1.jpg",
  },
  {
    gradient: "bg-gradient-to-r from-red-100 via-rose-100 to-pink-100",
    image: "/banners/banner2.jpg",
  },
  {
    gradient: "bg-gradient-to-r from-slate-100 via-rose-100 to-red-100",
    image: "/banners/banner3.jpg",
  },
];

const BannerCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const banner = banners[current];

  return (
    <div className="h-48 rounded-xl overflow-hidden relative">
        
         
        <div className="hidden sm:block h-full w-64 md:w-100 lg:w-96 relative">
          <img
            src={banner.image}
            className="h-full w-full object-cover"
          />
        </div>

    
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrent(idx)}
            className={`h-2 w-2 rounded-full transition ${
              idx === current ? "bg-slate-900 w-4" : "bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const Layouts: React.FC = () => {
  return (
    <div
      id="wrapper"
      className="min-h-screen bg-[#f5f7fa] flex flex-col items-center pt-16"
    >
      {/* 검색 박스 */}
      <div className="w-full max-w-3xl flex">
        <div className="flex items-center gap-4 rounded-full border border-[#fc4903] bg-white px-6 py-3 shadow-sm">
          <input
            className="flex-1 border-none outline-none text-base"
            placeholder="지역, 식당명 또는 메뉴를 검색해 보세요"
          />
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fc4903] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" />
              </svg>
            </button>
            
          </div>
          
        </div>
        <div className="flex">
              <button>
                dsf
              </button>
            </div>
      </div>

      {/* 메인 영역 */}
<div className="w-full max-w-[650px] h-50 rounded-xl overflow-hidden relative flex m-10">

        {/* 왼쪽 배너: 캐러셀 사용 */}
         <div className="flex-1">
          <BannerCarousel />
        </div>

        {/* 오른쪽 로그인 카드 */}
          <div className="flex-[0.9] w-43 ml-11 m-3">
          <div className="rounded-2xl bg-white p-6 flex flex-col gap-6">
        
       
              <p className="text-xs text-gray-500">
                로그인해 주세요.
              </p>
            <button className="w-full rounded-md bg-[#fc4903] py-2.5 text-sm font-semibold text-white">
              로그인
            </button>
            <div className="flex justify-between text-[10px] text-gray-500  ">
              <button className="hover:underline">아이디 찾기</button>
              <button className="hover:underline">비밀번호 찾기</button>
              <button className="hover:underline">회원가입</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full max-w-4xl">
        
        <div className="h-[295px] w- rounded-3xl bg-white shadow-sm">
          
        </div>
        
      </div>
    </div>
  );
};

export default Layouts;
