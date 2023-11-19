interface GigFormData {
    title: string;
    companyName: string;
    description: string;
    budget: string;
    duration: string;
    skills: string[];
	qualifications: string;
    responsibilities: string;
}

interface DrumsIconProps {
    colors: string;
    width: number;
    height: number;
};

interface GigData {
    id: number;
    role: string;
    companyname: string | null;
    description: string;
    keyresponsibilities: string;
    qualifications: string;
    user: number;
    duration: string;
    amount: string;
    skills: string;
}
