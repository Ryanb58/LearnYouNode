
number = 0;

for(i=0;i<process.argv.length;i++)
{
    if(i>1)
    {
        number = Number(number) + Number(process.argv[i]);
        //console.log(process.argv[i]);
    }
}
//console.log(process.argv);
console.log(number);
