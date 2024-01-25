export type Section = {
    type: string,
    grid: Grid,
    style: string,
    label: string,
    anchor: string,
}


export type Configuration = {
    title: string,
    layout: Layout,
    sections: any,
}

export type Layout = {
    type: 'SIMPLE' | 'BORDERED',
    leftBorderStyle?: string
}

export type Grid = {
    column: string,
    style: string,
}

export type MenuSection = Section & {
    title: Content,
    itemsContainer: MenuItemContainer,
}

export type MenuItemContainer = {
    items: MenuItem[],
    itemsStyle: string,
}
export type MenuItem = {
    label: string,
    anchor: string,
}


export type Intro = {
    type: string,
    message: string,
    description: string
}

export type AboutMeSection = Section & {
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

export type ProjectsSection = Section & {
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

export type TimelineSection = Section & {
    eventsContainer: EventsContainer,
}

export type EventsContainer = {
    hoverStyle: string,
    selectedStyle: { [klass: string]: any; },
    events: Event[],
}

export type Event = {
    name: string,
    subEvents: Event[],
    description: string,
    details: Content,
}

export type SkillsSection = Section & {
    skills: Skill[]
}
export type Skill = {
    image: Image,
    name: string,
    style: string,
    level?: number
}


export type ItemsSection = Section & {
    items: Item[],
}
export type Item = {
    image: Image,
    name: string,
    style: string
}


export type ServicesSection = Section & {
    services: Service[]
}
export type Service = {
    icon: string,
    name: string,
    description: string
}


export type ReferencesSection = Section & {
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