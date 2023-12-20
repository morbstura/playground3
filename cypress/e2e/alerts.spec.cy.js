describe('template spec', () => {
  it('verify that there will be an alert', () => {
    cy.on('uncaught:exception', (err, runnable) => { 
    return false
    cy.visit('https://demoqa.com/alerts')
    cy.get('#alertButton').eq(0).click();
    cy.on('window:alert',(text)=> {
      expect(text).to.contains('You clicked a button');
  })
})
  })
})
it('verify that there will be a timer alert', () => {
  cy.on('uncaught:exception', (err, runnable) => { 
  return false
  cy.visit('https://demoqa.com/alerts')
  cy.get('#timerAlertButton').click();
  cy.on('window:alert',(text)=> {
    expect(text).to.contains('This alert appeared after 5 seconds')
  })
})
})
it('verify that there will be a confirmation alert', () => {
  cy.on('uncaught:exception', (err, runnable) => { 
  return false
  cy.visit('https://demoqa.com/alerts')
  cy.get('#confirmButton').click();
  cy.on('window:confirm',(text)=> {
    expect(text).to.contains('Do you confirm action?')
    cy.get('#confirm-answer').contains('You selected Ok')
  })
})
})

it('verify that there will be a promt box  alert', () => {
  cy.on('uncaught:exception', (err, runnable) => { 
  return false
  cy.visit('https://demoqa.com/alerts')
  cy.get('#promtButton').click();
  cy.on('window:alert',(text)=> {
    expect(text).to.contains('Please enter your name')
  })
})
})
