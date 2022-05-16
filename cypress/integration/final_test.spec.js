import PracticePage from "../pageObjects/practicePage";

context("Practice page", () => {
    
    context("Practice page scenarios", () => {
        it("fillinf", () => {
            cy.fixture("practice_data").then(data => {

                cy.visit('https://demoqa.com/automation-practice-form')
                PracticePage.nameInput.type(data.name);
                PracticePage.lastNameInput.type(data.lastName);
                PracticePage.emailInput.type(data.email);
                PracticePage.maleGenderCheckbox.parent().click();
                PracticePage.mobileInput.type(data.mobile);
                PracticePage.birthInput.click();
                PracticePage.yearDropdown.select("1930");
                PracticePage.monthDropdown.select("February");
                PracticePage.datePick.click();
                PracticePage.subjectInput.type("Economic").focused().tab();
                PracticePage.hobbiesSelect.click();
                PracticePage.fileUpload.selectFile('./files/e6fdog.jpeg');
                PracticePage.currentAddress.type(data.currentAddress);
                PracticePage.stateSelect.type(data.state).focused().tab();
                PracticePage.citySelect.type(data.city).focused().tab();
                PracticePage.submitButton.click();
                PracticePage.getTableRowValue(0).should('contain', data.name + " " + data.lastName);
                PracticePage.getTableRowValue(1).should('contain', data.email);
                PracticePage.getTableRowValue(2).should('contain', "Male");
                PracticePage.getTableRowValue(3).should('contain', data.mobile);
                PracticePage.getTableRowValue(4).should('contain', "28 February,1930");
                PracticePage.getTableRowValue(5).should('contain', "Economics");
                PracticePage.getTableRowValue(6).should('contain', "Music");
                PracticePage.getTableRowValue(7).should('contain', "e6fdog.jpeg");
                PracticePage.getTableRowValue(8).should('contain', data.currentAddress);
                PracticePage.getTableRowValue(9).should('contain', data.state + " " + data.city);
                
            });
        });

    });
});