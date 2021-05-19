/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/

/* Getränke-Challenge */

/*
let ageKind1, ageKind2
let isKind1Older, isKind1Equal, isKind1Younger

ageKind1 = parseInt (prompt("bitte alter von Kind1 angeben!"));
ageKind2 = parseInt (prompt("bitte "));
 

ageKind1 = 0;
ageKind2 = 6;

ageKind1 = parseInt(prompt("Gib dein Alter ein!"));
ageKind2 = parseInt(prompt("Gib dein Alter ein!"));

//Logische Aussagen/ Test(s)
isKind1Older = (ageKind1 > ageKind2);
isKind2Equal = (ageKind1 == ageKind2);


// Ausgabe
console.log("isKind1Older: " + isKind1Older);
console.log("isKind1Equal: " + isKind1Equal);

/**********      IF    ***********/

// alternativlos ( TINA )
/*
if (false)
if (isKind1Older)
if (ageKind1 > ageKind2)
if (0 > 6);

{
    console.log(" Das Kind 0-6 Jahren bekommt Milch");
    
}
*/
/*
let ageKonsument, nameGetränk;

switch (true) {
    case :(ageKonsument >=0 && ageKonsument <=5):
        console.log(nameGetränk + " Gib ");
        break;
    case (ageKonsument >=6 && >= 12):
        console
    default:
        break;
}



*/
/*
let name1, age, drink;

name1 = prompt("name");
age = prompt("alter");

/*
alter unter 6 Jahren bekommt Milch "Milch"
alter unter 13 Jahren bekommt Saft  "Saft"
alter unter 18 Jahren bekommt Coke  "Coke"
alter ab 18 jahren bekommt Bier     "Bier"
*/
/*
switch (true)
{ 
    case ( age <6):
        drink=" Milch ";
        break;
    case( age <13):
        drink=" Saft ";
        break;
    case  (age <18):
        drink=" Coke ";
        break;
    case ( age >17):
        drink=" bier";
        break;
 
    default:
        drink = " bekommt nichts "
        break;

}
console.log(name1 + " bekommt " + drink);
*/

let firstName =prompt("Sag mir deinen Namen und Ich sage dir was du bekommst");
let age = parseInt(prompt("sag mir bitte noch dein Alter"));

switch (true)
{
    case (age >= 0) && (age <=5):
        console.log(firstName + " du bekomsmt nur Milch");
         break;
        
    case ( age >=6) && (age <=12):
        console.log(firstName +" du kannst Wählen Saft");
        break;
            
    case (age >=13) && ( age <=17):
        console.log(firstName + " du hast nun die Wahl zwischen Milch, Saft oder Coke ");
        break;

    case(age >=18) && (age <= 60):
        console.log(firstName + " du kannst alles trinken! willstn bier ?");
        break;

    default:
        console.log("Du solltest Tee trinken !! ISt besser für dich !");
        break;
}








