// Q. Merge Strings Alternately
	
//    Example :-
//    Input: word1 = "abc", word2 = "pqr"
//    Output: "apbqcr"


// let word1='abc'
// let word2='pqr'

function task(word1,word2){
    let res=[]

    let a=word1.split('')
    let b=word2.split('')

    let leng=Math.max(a.length,b.length)

    for(i=0;i<leng;i++){
        res.push(a[i])
        res.push(b[i])
    }
    return res.join('')
}

console.log(task('abc','pqr'))
