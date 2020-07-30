function investitors (arr){
    let numberOfInvestments = arr.length;
    let investitors = [];
    for(let i=0; i<numberOfInvestments;i++){
        if(investitors.length>0){
            for(let x = 0;x<investitors.length;x++){
                console.log(investitors)
            }
        }else{
            investitors.push(arr[i])
        }
        }
        console.log(investitors)
}

investitors(["strahinja","stefan","lazar","strahinja","strahinja","strahinja","stefan","strahinja","stefan"])