"use client";

export default function Header() {
    return (
        <div id="Header" className="flex flex-col bg-[#18181B] w-full h-[262px] mt-[0px] pt-[48px] pl-[164px]">
            <div className="text-[#3B82F6] font-semibold text-xl">
                Dicoding Jobs
            </div>
            <div className="flex">
                <div className="text-white font-semibold text-[40px] leading-[61px] w-[541px]">
                    Temukan lowongan yang cocok untuk kamu
                </div>
                <img src="/header_art.png" alt="" className="w-[203px] h-[61px] self-end ml-[-160px]" />
            </div>
        </div>
    );
}