
/**
 *  display even and odd
 */


function DisplayDigits(iNo)
{
    if (iNo < 0)
    {
        iNo = -iNo
    }

    let iDigits = 0

    while(iNo != 0)
    {
        iDigits = iNo % 10
        if(iDigits % 2 == 0)
        {
            console.log( "Even digits: " +iDigits);
        } 
        else
        {
            console.log("Odd digits : " + iDigits);
            
        }
        iNo = Math.floor(iNo / 10)
    }
}

function main()
{
    DisplayDigits(89765)
}

main()
