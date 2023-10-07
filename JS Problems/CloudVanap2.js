let arr = [1,2,5,99,35,3242,321,3,4,5,6,7,8,9,10,11,12,13,14]

arr = arr.sort((a,b)=>{
    if(parseInt(a)>parseInt(b)){
        return -1
    }
    else if(parseInt(a)<parseInt(b)){
        return 1
    }
    else{
        return 0;
    }
})

console.log(arr)


