// fact=1;
// n=3;
// for(var i=n; i>=1; i--)
// {   
//     fact=fact*i;
    
// }

// console.log(fact);

// var fibo=[0,1];

// for( var i=2;i<=10;i++)
// {
// fibo[i]=fibo[i-1]+fibo[i-2];
// console.log(fibo[i]);
// }

// function fibonacci(n)
// {
//     if(n==0)
//     {
//         return 0;
//     }
//     if(n==1){
//         return 1;
   
//     }
//     else {
//         return fibonacci(n-1)+fibonacci(n-2);
//     }
// }var result =fibonacci(10);
// console.log(result);

var n=8;

if (n==1)
{
    prime=1;
}

else{
    for(var i=2;i<n;i++ )
    {
        temp=n%i;
        if(temp==0)
        {
            prime=0;
            break;

        }
        prime=1;
    }
}

if (prime==1)
{
console.log("This is a prime number");
}

if (prime==0)
{
console.log("This is a not prime number");
}