
/**
 * DisplayDigits
 */

/** add input filter to handled negative values */
function DisplayDigits(iNo)
{
    if (iNo < 0)
    {
        iNo = -iNo
    }
    let iDigits = 0;

    while(iNo != 0)
    {
        iDigits = iNo % 10;
        console.log(iDigits);
        iNo = Math.floor(iNo / 10);
    }
}

function main()
{
    DisplayDigits(-1234);
}

main();
