

class PracticePage {
    static get url() {
        return '/automation-practice-form';
    }

    static get exampleElement() {
        return cy.get('exampleSelector');
    }

    static get nameInput() {
        return cy.get('input#firstName')
    }

    static get lastNameInput() {
        return cy.get('input#lastName')
    }

    static get emailInput() {
        return cy.get("input#userEmail");
    }

    static get maleGenderCheckbox() {
        return cy.get("#gender-radio-1.custom-control-input");
    }

    static get mobileInput() {
        return cy.get('#userNumber');
    }

    static get birthInput() {
        return cy.get("#dateOfBirthInput");
    }

    static get yearDropdown() {
        return cy.get("select.react-datepicker__year-select");
    }

    static get monthDropdown() {
        return cy.get("select.react-datepicker__month-select");
    }

    static get datePick() {
        return cy.get("[aria-label='Choose Friday, February 28th, 1930']");
    }

    static get subjectInput() {
        return cy.get("div.subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3");
    }

    static get hobbiesSelect() {
        let wrapper = cy.get("div#hobbiesWrapper");
        let hobbies = wrapper.children().last();
        let music = hobbies.children().last();
        return music;
    }

    static get fileUpload() {
        return cy.get("input#uploadPicture");
    }

    static get currentAddress() {
        return cy.get("textarea#currentAddress");
    }

    static get stateSelect() {
        return cy.get("#state");
    }

    static get citySelect() {
        return cy.get("#city");
    }

    static get submitButton() {
        return cy.get("#submit");
    }

    static get tableData() {
        return cy.get("table.table.table-dark.table-striped.table-bordered.table-hover").children().last();
    }

    static getTableRowValue(data) {
        let table = PracticePage.tableData;

        return table.children().eq(data).children().last();
    }
}

export default PracticePage;
