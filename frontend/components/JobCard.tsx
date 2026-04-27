import Link from "next/link";

type Vacancy = {
    id: string;
    job_title: string;
    job_company: string;
    job_location: string;
    job_experience_required: string;
    job_created: Date;
    job_closed_registration: Date;
    job_show_salary: string;
    job_maximum_salary: number | null;
    job_minimun_salary: number;
    job_type: string;
};

function formatDate(date: Date) {
    return new Date(date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export default function VacancyCard({ vacancy }: { vacancy: Vacancy }) {
    return (
        <Link href={`/detail/${vacancy.id}`} className="w-[730px] h-[128px] border p-[16px] rounded-[1px] grid gap-[10px] items-center">
            <div key={vacancy.id} id="vacancy" className="relative flex gap-[16px]">
                <img src="/dicoding_logo.png" alt="Company Logo" className="flex-none border rounded-[4px]" />
                <div id="card-element" className="flex flex-col gap-[16px] pb-2 text-[#18181B]">
                    <div id="card-job-title" className="flex font-bold">{vacancy.job_title}</div>
                    <div id="card-detail" className="flex flex-col gap-[8px] text-xs">
                        <div className="flex gap-[16px]">
                            <div className="flex items-center gap-[4px]">
                                <img src="/building_icon.png" alt="" />
                                <div>{vacancy.job_company}</div>
                            </div>
                            <div>{vacancy.job_type}</div>
                        </div>
                        <div className="flex gap-[16px]">
                            <div className="flex items-center gap-[4px]">
                                <img src="/location_icon.png" alt="" />
                                <div>{vacancy.job_location}</div>
                            </div>
                            <div className="flex items-center gap-[4px]">
                                <img src="/experience_icon.png" alt="" />
                                <div>{vacancy.job_experience_required}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="card-info" className="flex flex-col absolute top-0 right-0 place-items-end gap-[8px] text-xs font-normal text-[#52525B]">
                    <div>{"Dibuat pada "}{formatDate(vacancy.job_created)}</div>
                    <div>{"Lamar sebelum "}{formatDate(vacancy.job_closed_registration)}</div>
                    {vacancy.job_show_salary == "true" && (
                        <div>
                            Gaji: Rp {vacancy.job_minimun_salary}
                            {vacancy.job_maximum_salary && ` - ${vacancy.job_maximum_salary}`}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}