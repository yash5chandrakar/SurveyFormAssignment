let arr = [1,2,5,99,35,3242,321,3,4,5,6,7,8,9,10,11,12,13,14]

function sortArray(array){
    let ind;
    for(let i=0;i<array.length;i++){
        ind = i;
        for(j=i+1;j<array.length;j++){
            if(parseInt(arr[j])<parseInt(arr[ind])){
                ind = j;
            }
        }
        changePositions(array,ind,i);
    }
    return array
}

function changePositions(array,ind1,ind2){
    let tempValue = array[ind1]
    array[ind1] = arr[ind2]
    arr[ind2] = tempValue
}

console.log(sortArray(arr))


