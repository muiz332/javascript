// null undefined check

/*

untuk mengecheck apakah nilai itu berisi null atau undefined
kalian bisa mngechecknya seperti ini

*/


const p = 'apa'

let value = (p !== null && p !== undefined) ? p : 'unknown'

console.log(value)


// nah kalian bisa menyingkatnya menjadi seperti ini


const p2 = undefined

console.log(p2 ?? 'unknown')