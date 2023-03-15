describe('login test', () => {
    beforeEach(() => {
        // cy.log('123', Cypress.env());
    });
    let $inputs;
    it('1, open', () => {
        cy.visit('http://127.0.0.1:5173/#/');
        cy.wait(1000);
        cy.get('.main-header .el-button').click();
        $inputs = cy.get('.el-dialog').find('input[type="text"]');
        $inputs.should('have.length', 2);
        $inputs.first().type('1234'); // 赋值
        // $inputs.last().type('4567')
        cy.get('.el-dialog').find('input[type="password"]').type('abcd'); // 赋值
        // cy.log($inputs[1])
        // cy.wait(1000)
        // cy.log(cy.get('.el-dialog').find('.el-button'))
        // cy.get('.el-dialog').find('.el-button').contains('login').click();
    });
    // it('2, ajax', () => {
    //     cy.fixture('data.json').then(res => {
    //         cy.log('res', res)
    //         cy.wrap(res).its('data').its('name').should('eq', 'nnnn')
    //     })
    // })
    // it('3, hash', () => {
    //     cy.visit('http://127.0.0.1:5173/#/order');
    //     cy.log(cy.hash());
    //     cy.log(cy.location('hash'));
    //     cy.log(cy.url());
    // })
});
