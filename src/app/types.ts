export type Configuration = {
    title: string,
    menuSection: MenuSection,
    intro?: Intro,
    layout: Layout,
    sections: any
}

export type Layout = {
    type: 'SIMPLE' | 'BORDERED',
    leftBorderStyle?: string
}

export type MenuSection = {
    title: Content,
    style: string,
    itemsContainer: MenuItemContainer,
}

export type MenuItemContainer = {
    itemsStyle: string,
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
    description: Content,
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
    projects: Project[],
}
export type Project = {
    name: string,
    description: Content,
    tag: string,
    imageChangeInterval: number,
    images: Image[],
    details: Content,
    demoUrl: string,
    sourceCode: string,
}

export type TimelineSection = {
    type: string,
    style: string,
    label: string,
    anchor: string,
    eventsContainer: EventsContainer,
}

export type EventsContainer = {
    hoverStyle: string,
    selectedStyle: { [klass: string]: any; },
    events: Event[],
}

export type Event = {
    name: string,
    description: string,
    details: Content,
}

export type SkillsSection = {
    type: string,
    style: string,
    label: string,
    anchor: string,
    skills: Skill[]
}
export type Skill = {
    image: Image,
    name: string,
    style: string,
    level?: number
}


export type ItemsSection = {
    type: string,
    showInMenu: boolean,
    style: string,
    label: string,
    anchor: string,
    items: Item[],
}
export type Item = {
    image: Image,
    name: string,
    style: string
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


export type Content = {
    style?: string,
    content: string
}