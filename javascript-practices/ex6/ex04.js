/*
04. efault parameter
*/

const print = function(strs, end='\n') {
    console.log(strs.join(end));
 }

print(['Always', 'with', 'me']); // 결과 : Alwyas / with / me
print(['Always', 'with', 'me'], ' '); // 결과 : Always with me 


