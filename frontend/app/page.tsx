import VacancyCard from "@/components/JobCard";
import { get } from "@/server/vacancies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const navItems = [
  { title: "Lowongan Kerja", url: "/" },
  { title: "Dashboard", url: "/dashboard" },
];

export default async function Home() {
  const data = await get();

  return (
    <div>
      <Navbar />
      <Header />
      <div id="body" className="flex flex-col items-center">
        <div id="body-header" className="flex justify-between w-[730px] mt-12">
          <div id="vacancy-list-header" className="font-semibold text-[24px]">Daftar Pekerjaan Terbaru</div>
          <div id="search-bar">Search bar</div>
        </div>
        <div id="vacancy-list" className="grid gap-[24px] mt-6">
          {data.map((item) => (
            <VacancyCard key={item.id} vacancy={item} />
          ))}
        </div>
      </div>
      <Footer />
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