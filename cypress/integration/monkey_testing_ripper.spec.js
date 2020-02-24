describe('Los estudiantes under monkeys', function() {
  it('visits los estudiantes and survives monkeys', function() {
      cy.visit('https://losestudiantes.co');
      cy.contains('Cerrar').click();
      cy.wait(1000);
      var e=randomEvent();
      randomClick(5,e);
  })
})
function randomClick(monkeysLeft,event) {

  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
  };

  var monkeysLeft = monkeysLeft;
  if(monkeysLeft > 0) {
      cy.get(event).then($links => {
          var randomLink = $links.get(getRandomInt(0, $links.length));
          if(!Cypress.dom.isHidden(randomLink)) {
            if(event=='a' || event=='button' )  {
              cy.wrap(randomLink).click({force: true});
            }
            if(event=='input')  {
              cy.wrap(randomLink).click({force: true}).type("prueba1");
            }
              
          }
          monkeysLeft = monkeysLeft - 1;
          cy.wait(1000);
          randomClick(monkeysLeft,event);
      });
  }   
}

  function randomEvent() {
    //1.Hacer click en un link al azar 'a'
    //2.Llenar un campo de texto al azar 'input'
    //3.Seleccionar un combo al azar 'select'
   //4.Hacer click en un botón al azar 'button'
  var event='';
  var random=Math.floor(Math.random() * (4 - 1)) + 1;
    if(random==1){
      event='a';
    }
    if(random==2){
      event='input';
    }
    if(random==3){
      event='select';
    }
    if(random==4){
      event='button';
    }
    return event;

  }
