export type Configuration = {
    menuSection: MenuSection,
    intro?: Intro,
    sections: any
}

export type MenuSection = {
    title: string,
    style: string,
}
export type Intro = {
    type: string,
    message: string,
    description: string
}

export type AboutMeSection = {
    type: string,
    style: string,
    label: string,
    anchor: string,
    image: Image,
    socialMediaStyle: string,
    description: string,
    socialMedia: SocialMedia[]
}
export type SocialMedia = {
    name: string,
    icon: string,
    link: string,
    style: string
}

export type ProjectsSection = {
    type: string,
    style: string,
    label: string,
    anchor: string,
    additionalInfo: string,
    projects: Project[];
}
export type Project = {
    name: string;
    tag: string;
    imageChangeInterval: number,
    images: Image[];
    description: string;
    shortDescription: string;
}

export type TimelineSection = {
    type: string,
    style: string,
    label: string
    anchor: string,
    events: Event[];
}
export type Event = {
    name: string,
    description: string,
    details: string,
}

export type SkillsSection = {
    type: string,
    style: string,
    mode: "PROGRESS_BAR" | "ICONS",
    label: string,
    anchor: string,
    skills: Skill[];
}
export type Skill = {
    image: Image;
    name: string,
    style: string
    level?: number,
}

export type ServicesSection = {
    type: string,
    style: string,
    label: string
    services: Service[]
}
export type Service = {
    icon: string,
    name: string,
    description: string
}


export type ReferencesSection = {
    label: string
    style: string,
    references: Reference[]
}
export type Reference = {
    text: string,
    name: String,
    position: string,
    image: Image
}


export type Image = {
    url: string,
    alt: String,
    link?: string,
    style: string
}
