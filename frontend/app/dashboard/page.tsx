import { get } from "@/server/vacancies";
import Navbar from "@/components/Navbar";
import MyVacancyCard from "@/components/MyJobCard";

const navItems = [
    { title: "Lowongan Kerja", url: "/" },
    { title: "Dashboard", url: "/dashboard" },
];

export default async function Home() {
    const data = await get();

    return (
        <div>
            <Navbar />
            <div className="flex">
                <div id="sidebar" className="basis-[30%]">

                </div>
                <div id="content" className="flex flex-col items-center">
                    <div id="body-header" className="flex justify-between w-[730px] mt-12">
                        <div id="vacancy-list-header" className="font-semibold text-[24px]">Lowongan Saya</div>
                        <button id="search-bar" className="w-[158px] h-[36px] py-[6px] px-[12px] bg-[#2D3E50] text-white font-normal text-base">Buat lowongan</button>
                    </div>
                    <div id="vacancy-list" className="grid gap-[24px] mt-6">
                        {data.map((item) => (
                            <MyVacancyCard key={item.id} vacancy={item} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

function formatDate(date: Date) {
    return new Date(date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}