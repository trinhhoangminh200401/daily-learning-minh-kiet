const reverse_string_keep_space_v1 = (str) => {
    let inputArr = str.split("")
    let result = new Array (inputArr.length)

    // Mark space in reuslt
    for(let i = 0; i<inputArr.length; i++){
        if(inputArr[i] == " ")
            result[i] = inputArr[i] 
    }
    // Traverse input string from beginning
    // and put characters in result from end
    let j = result.length - 1
    for(let i = 0; i<inputArr.length; i++){
        if(inputArr[i]!=" "){
            if(result[j] == " "){
                j--
            }
            result[j] = inputArr[i]
            j--
        }
    }
    return result.join("")
}
console.log(reverse_string_keep_space_v1("internship at geeks for geeks"))