export const emploeeys=[
    {firstName:"Lea", lastName:"Kaplan" ,age:38,city:"modiin",subject:"professional teacher"},
    {firstName:"Ayala", lastName:"Ravin" ,age:50,city:"elad",subject:"teacher educates"},
    {firstName:"Yael", lastName:"Kraviz" ,age:50,city:"elad",subject:"teacher educates"},
    {firstName:"Chana", lastName:"Benshimon",age:31,city:"modiin",subject:"professional teacher"}
];
export const subjectes = ['',...new Set(emploeeys.map(i=>i.subject))];
console.log(subjectes)

