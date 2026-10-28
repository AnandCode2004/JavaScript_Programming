
/**
 * DisplayOddDigits
 */


function DisplayOdd(iNo)
{
    if (iNo < 0)
    {
        iNo = -iNo
    }

    let iDigits = 0

    while(iNo != 0)
    {
        iDigits = iNo % 10
        if(iDigits % 2 != 0)
        {
            console.log(iDigits);
        }
        iNo = Math.floor(iNo / 10)
    }
}

function main()
{
    DisplayOdd(1234)
}

main()
