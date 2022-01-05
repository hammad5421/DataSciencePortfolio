
export interface ContactData {
    name: string;
    text: string;
    link: string;
    icon: string;
}

export interface SkillData {
    languages: string[];
    tools: string[];
}

export interface ExperienceData {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description?: string;
    bullets: string[];
    tags: string[];
}

export interface EducationData {
    title: string;
    school: string;
    location: string;
    graduationDate: string;
    courses: string[];
    tags: string[];
}

export interface CertificationData {
    title: string;
    date: string;
    link: string;
    tags: string[];
}

export interface ProjectLinkData {
    name: string;
    link: string;
}

export interface ProjectData {
    title: string;
    description: string[];
    tags: string[];
    links: ProjectLinkData[];
}

export interface BlogPostData {
    publication?: string;
    title: string;
    subtitle: string;
    date: string;
    link: string;
    description: string;
    tags: string[];
}

export interface ResumeData {
    contact: ContactData[];
    skills: SkillData;
    experience: ExperienceData[];
    education: EducationData[];
    certifications: CertificationData[];
    projects: ProjectData[];
    blogPosts: BlogPostData[];
}
