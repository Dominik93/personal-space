import { AboutMeSectionComponent } from "./sections/about-me-section/about-me-section.component";
import { BlankSectionComponent } from "./sections/blank-section/blank-section.component";
import { ColumnSectionComponent } from "./sections/column-section/column-section.component";
import { ItemsSectionComponent } from "./sections/items-section/items-section.component";
import { MenuComponent } from "./sections/menu/menu.component";
import { ProjectsSectionComponent } from "./sections/projects-section/projects-section.component";
import { RowSectionComponent } from "./sections/row-section/row-section.component";
import { SkillsSectionComponent } from "./sections/skills-section/skills-section.component";
import { TimelineSectionComponent } from "./sections/timeline-section/timeline-section.component";
import { Grid } from "./types";

export type SectionComponent = {
    type: any;
    inputs: any;
    grid: Grid;
}

export class ComponentMapper {

    public static toComponents(sections: any): SectionComponent[] {
        if (!sections) {
            return [];
        }
        const components: SectionComponent[] = []
        Object.keys(sections).forEach(key => {
            const section = sections[key];
            const type = ComponentMapper.toType(section);
            if (type) components.push({ type: type, inputs: { section: section }, grid: section.grid });
        })
        return components;
    }

    private static toType(section: any) {
        switch (section.type) {
            case 'MENU':
                return MenuComponent;
            case 'ROW':
                return RowSectionComponent;
            case 'COLUMN':
                return ColumnSectionComponent;
            case 'BLANK':
                return BlankSectionComponent;
            case 'ABOUT_ME':
                return AboutMeSectionComponent;
            case 'PROJECTS':
                return ProjectsSectionComponent;
            case 'TIMELINE':
                return TimelineSectionComponent;
            case 'SKILLS':
                return SkillsSectionComponent;
            case 'ITEMS':
                return ItemsSectionComponent;
            default:
                return;
        }
    }
}