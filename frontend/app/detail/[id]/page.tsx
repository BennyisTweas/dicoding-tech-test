import VacancyCard from "@/components/JobCard";
import { get } from "@/server/vacancies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

const navItems = [
    { title: "Lowongan Kerja", url: "/" },
    { title: "Dashboard", url: "/dashboard" },
];

async function getDetail(id: string) {
    const res = await fetch(`${process.env.APP_URL}/vacancies/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) return null;

    const json = await res.json();
    return json.data;
}

export default async function DetailPage({ params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const data = await getDetail(id);

    if (!data) return notFound();

    return (
        <div>
            <Navbar />
            <div id="body" className="flex flex-col items-center">
                <div id="heading" className="flex justify-between w-full h-[152px] border-b">
                    <img src="/dicoding_logo.png" alt="" />
                    <div id="job header" className="flex flex-col">
                        <div>{data.job_title}</div>
                        <div>Sektor Bisnis Technology</div>
                        <div className="flex">
                            <div>{data.job_company}</div>
                            <div>{data.job_location}</div>
                            <div>50-100 karyawan</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div>Job Description</div>
                    <div>{data.job_description}</div>
                    <div>Responbilities</div>
                    <div>Responbilities list</div>
                    <div>Requirements</div>
                    <div>Requirements</div>
                    <div>Informasi Tambahan</div>
                    <div className="flex">
                        <div id="job-experience" className="flex flex-col">
                            <div>Pengalaman Bekerja</div>
                            <div>{data.job_experience_required}</div>
                        </div>
                        <div id="job-candidate" className="flex flex-col">
                            <div>Kandidat yang dibutuhkan</div>
                            <div>{data.job_candidate}</div>
                        </div>
                    </div>
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