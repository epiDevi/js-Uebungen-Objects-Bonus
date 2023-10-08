let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

const nameArr=[], preiseGramEuroArr =[], veraenderungArr=[];
edelMetallPreise.forEach(elm => {
    nameArr.push(elm.name);
    preiseGramEuroArr.push(elm.preiseGramEuro);
    veraenderungArr.push(elm.veraenderung);
});

const table= "<table id=tableResult> <tr><th>name</th><th>preiseGramEuro</th><th>veraenderung</th></tr>";
document.body.innerHTML += table;
const tableElm= document.querySelector("#tableResult");
i=1;
edelMetallPreise.forEach(elm =>{
    var row = tableElm.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML=elm.name;
    cell2.innerHTML=elm.preiseGramEuro;
    cell3.innerHTML=elm.veraenderung;
    i++;
    
  
})


