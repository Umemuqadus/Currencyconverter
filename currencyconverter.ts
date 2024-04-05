import inquirer from "inquirer";

async function currencyconverter(){

  while(true) { const user_input = await inquirer.prompt([{
        name : 'amount',
        type : 'input',
        message : 'Write the Pakistani rupee amount.'
    }])

    const amount = Number(user_input.amount)
   
    const currency = await inquirer.prompt([{

        name : 'currency',
        type : 'list',
        message : 'Select the currency.',
        choices : ["United States Dollar" , "Euro" , "Japanese Yen" , "Chinese Yuan" , "United Arab Emirates Dirham" , "Saudi Riyal" , "Vietnamese Dong" , "Bangladeshi Taka" , "Indonesian Rupiah" , "Philippine Peso" , "Thai Baht" , "Turkish Lira" , "Kuwait Dinar"],
        
    }])
    
    switch(currency.currency){


        case "United States Dollar" :
        let Dollar = amount / 278 ;
        console.log(Dollar + " "+"Dollars.") ;
        break;


        case "Euro" :
        let Euro = amount / 300;
        console.log(Euro +" " +'Euros.');
        break;


        case "Japanese Yen" :
        let Yen = amount / 1.833;
        console.log(Yen +" "+'Yens.');
        break;


        case "Chinese Yuan" :
        let Yuan = amount / 38.45;
        console.log(Yuan +" "+'Yauns.');
        break;


        case "United Arab Emirates Dirham":
        let Dirham = amount / 75.71;
        console.log(Dirham +" " +'Dirhams.');
        break;
        

        case "Saudi Riyal" :
        let Riyal = amount / 76.25;
        console.log(Riyal +" "+"Riyals.");
        break;


        case "Vietnamese Dong" :
        let Dong = amount / 0.0112;
        console.log(Dong +" " +"Dongs.");
        break;


        case "Bangladeshi Taka" :
        let Taka = amount / 2;
        console.log(Taka +" " +"Takas.");
        break;


        case "Indonesian Rupiah" :
        let Rupiah = amount / 0.0174;
        console.log(Rupiah +" " +"Rupiahs.");
        break;


        case "Philippine Peso" :
        let Peso = amount / 4.94;
        console.log(Peso+ " " + 'Pesos.');
        break;


        case "Thai Baht":
        let Baht = amount / 7.59;
        console.log(Baht + " "+ 'Bahts.');
        break;


        case "Turkish Lira" :
        let Lira = amount / 8.64;
        console.log( Lira + " " +'Liras.');
        break;


        case "Kuwait Dinar" :
        let Dinar = amount / 900;
        console.log(Dinar + " "+'Dinars.');
        break;

    }
    }
}

currencyconverter();