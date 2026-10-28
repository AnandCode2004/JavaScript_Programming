
/**
 *  Reverse the digit
 */


function Reverse(iNo)
{

    if (iNo === 0)
    {
        return 0;
    }

    if (iNo < 0)
    {
        iNo = -iNo
    }

    let iDigit= 0
    let iRev = 0

    while(iNo != 0)
    {
        iDigit = iNo % 10
        iRev = (iRev * 10 ) + iDigit
        iNo = Math.floor(iNo / 10)
    }
     
    return iRev;
}

function main()
{
   console.log("Reverse of digit : " +  Reverse(12345));
   
}

main()
