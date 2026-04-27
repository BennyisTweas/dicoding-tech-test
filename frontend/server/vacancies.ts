"use server";

interface Vacancy {
    id: string
    job_title: string
    job_company: string
    job_candidate: number
    job_description: string
    job_location: string
    job_experience_required: string
    job_created: Date
    job_closed_registration: Date
    job_minimun_salary: number
    job_maximum_salary: number | null
    job_type: string
    job_show_salary: string
}

export const get = async (): Promise<Vacancy[]> => {
    const data = await fetch(`${process.env.APP_URL}/vacancies`, {
        cache: "no-store",
    });
    const json = await data.json();
    return json.data;
};