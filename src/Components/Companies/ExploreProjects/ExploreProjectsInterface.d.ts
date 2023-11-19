interface ProjectFormData {
    title: string;
    companyName: string;
    description: string;
	deliverables: string;
    skills: string[];
}

interface ProjectData {
    companyname: string | null;
    contributers: string;
    deliverables: string;
    description: string;
    id: number;
    stack: string;
    title: string;
    user: number;
}