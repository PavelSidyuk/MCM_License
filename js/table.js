export default class Table {
    element;

    constructor(title ="",headerConfig = [], data = []) {
        this.title = title;
        this.headerConfig = headerConfig;
        this.data = data;
        this.element = this.createElement(this.createTemplate());

    }

    createElement(template) {
        const element = document.createElement('div');
        element.innerHTML = template;
        return element.firstElementChild;
    }

    createTemplate() {
        return (`
         <div>
            <h2>${this.title}</h2>
            <div class="table">
                <div data-element="header" class="table__header table__row">
                    ${this.createHeaderTemplate(this.headerConfig)}
                </div>
                <div data-element="body" class="table__body">
                    ${this.createBodyTemplate(this.headerConfig, this.data)}
                </div>
            </div>
         </div>
    `);
    }

    createHeaderTemplate(headerConfig) {
        return headerConfig.map(config => this.createHeaderCellTemplate(config)).join('');
    }

    createHeaderCellTemplate(config) {
        return `
      <div class="table__cell" data-id="${config.id}">
        <span>${config.title}</span>
      </div>`;
    }

    createBodyTemplate(headerConfig, dataItems) {
        return dataItems.map(item => this.createRowTemplate(headerConfig, item)).join('');
    }

    createRowTemplate(headerConfig, item) {
        return `
       <div class="table__row">
       ${headerConfig.map(config => this.createRowCellTemplate(config, item)).join('')}
      </div>`;
    }

    createRowCellTemplate(config, item) {
        const fieldName = config['id'];
        const fieldValue = item[fieldName];
        if(fieldName === "title" || fieldName === "price"){
            return `<div class="table__cell bold">${fieldValue}</div>`;
        }
        return `<div class="table__cell">${fieldValue}</div>`;
    }
}