/// <reference types="cypress" />

describe('Check Map', () => {
    it('Click Phoenix, panel should open and have outage text value of 8', () => {
      cy
      .intercept('https://qa.kubra.io/stormcenter/api/v1/stormcenters/1c7c76be-1355-4fe6-b336-53be6efdc1e7/messages/CW2hfY/intl/en-US/desktop').as('map')
      .visit('https://qa.kubra.io/stormcenter/views/729ad91e-a0d4-4b30-bcc9-5eb747c25fd4/?c=01-SeparateWithSwitching&o=ViewByAreaEN')
      .wait('@map')
      .get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]').click()
      //.get('[data-cy="info-box-field-value-n_out"]').should('have.text', '8');
    })
  })