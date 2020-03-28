function tugasDuaPuluhEmpat(){
    var arrDeret = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log("Sebelumnya : ", arrDeret);
    
    var arrAsc = arrDeret.sort();
    console.log("Ascending : ", arrAsc);

    var arrDesc = arrDeret.reverse();
    console.log("Descending : ", arrDesc);

    var arrFilter = arrDeret.filter(arrFl => {
        return arrFl > 10;
    });
    console.log("Filter > 10 : ", arrFilter);
    
}
tugasDuaPuluhEmpat();
