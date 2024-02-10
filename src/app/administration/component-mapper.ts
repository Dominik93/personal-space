export class ComponentMapper {

    public static toEmptyModel(type: string) {
        switch (type) {
            case 'MENU':
                return {
                    type: "MENU",
                    style: "",
                    label: "Menu",
                    anchor: "menu",
                    title: {
                        content: ""
                    },
                    itemsContainer: {
                        itemsStyle: "",
                        items: []
                    }
                }
            case 'ROW':
                return {
                    id: Date.now().toString(),
                    type: "ROW",
                    grid: {
                        column: "row",
                        style: ""
                    },
                    style: "",
                    sections: {}
                }
            case 'COLUMN':
                return {
                    id: Date.now().toString(),
                    type: "COLUMN",
                    grid: {
                        column: "col",
                        style: ""
                    },
                    style: "",
                    sections: {}
                }
            case 'BLANK':
                return {
                    id: Date.now().toString(),
                    type: "BLANK",
                };
            case 'ABOUT_ME':
                return {};
            case 'PROJECTS':
                return {};
            case 'TIMELINE':
                return {};
            case 'SKILLS':
                return {};
            case 'ITEMS':
                return {};
            default:
                return;
        }
    }
}