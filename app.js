const data_machine = require('./machinee.json');
const fs = require("fs");



//Part1
function makeDrink(drink,sugar)
{
  let outputMSG = '';
  switch(drink)
  {
    case 'juice': 
    outputMSG += 'O'
    sugar = 0;
    data_machine.nbJuiceSold++;
    break;

    case 'coffee': 
    outputMSG += 'H'
    data_machine.nbCoffeeSold++;
    break;

    case 'extra hot coffee': 
    outputMSG += 'Ch'
    data_machine.nbHotCoffeeSold++;
    break;

    case 'tea': 
    outputMSG += 'T'
    data_machine.nbTeaSold++;
    break;
    case 'extra hot tea': 
    outputMSG += 'Th'
    data_machine.nbHotTeaSold++;
    break;

    case 'chocolate': 
    outputMSG += 'C'
    data_machine.nbChocolateSold++;
    break;
    case 'extra hot chocolate': 
    outputMSG += 'Hh'
    data_machine.nbHotChocolateSold++;
    break;
  }

switch(sugar)
  {
    case 0 : 
    outputMSG += '::';
    break;
    case 1 : 
    outputMSG += ':'+sugar+':0';
    break;
    case 2 : 
    outputMSG += ':'+sugar+':0';
    break;
  }
 // save();
return outputMSG;
}

//Part2
//I Suppose that the user has already chose the drink 
//and the machine has executed the fuction 'makeDrink(drink,sugar)'
function goingIntoBusiness(moneyPaied,drink)
{
  
  switch (drink)
  {
    case 'coffee': 
    case 'extra hot coffee': 
    {
      if(moneyPaied - 0.6 >= 0)
      {
        data_machine.money_earned +=0.6;
        console.log(makeDrink(drink,0));
      console.log(`rest : ${moneyPaied - 0.6}`);
      }
    
      else
       console.log(`amount paid: ${moneyPaied} euro, Missing ammount to buy a coffee= ${0.6 - moneyPaied} euro`);

      break;
    }
    case 'juice': 
    {
      if(moneyPaied - 0.6 >= 0)
      {
        data_machine.money_earned +=0.6;

        console.log(makeDrink(drink,0));
        console.log(`rest : ${moneyPaied - 0.6}`);
      }
     
      else
      console.log(`amount paid: ${moneyPaied} euro, Missing ammount to buy a juice= ${0.6 - moneyPaied} euro`);

      break;
    }

    case 'tea': 
    case 'extra hot tea': 
    {
      if(moneyPaied - 0.4>= 0)
      { 
        
        data_machine.money_earned +=0.4;
        console.log(makeDrink(drink,0));

        console.log(`rest : ${moneyPaied - 0.4}`);

      }
      
      else
      console.log(`amount paid: ${moneyPaied} euro, Missing ammount to buy a tea= ${0.4 - moneyPaied} euro`)
      break;
    }

    case 'chocolate':
    case 'extra hot chocolate': 
    {
      if(moneyPaied - 0.5 >= 0)
      {
        
        data_machine.money_earned +=0.5;
        console.log(makeDrink(drink,0));
        console.log(`rest : ${moneyPaied - 0.5}`);
      }
      else
      console.log(`amount paid: ${moneyPaied} euro, Missing ammount to buy a chocolate= ${0.5 - moneyPaied} euro`)
      break;
    }
  }

  }

  //Part 3 : 
// the part 1 and 2 were updated and tested

  //Part 4:
  function save()
  {
    fs.writeFile("machinee.json", JSON.stringify(data_machine), err => {
     
      // Checking for errors
      if (err) throw err; 
     
  });  

  }


  //tests
  //part 1 
  let ch = makeDrink('extra hot chocolate',1);
  //part 2
  goingIntoBusiness(1,'extra hot chocolate');

  save();













