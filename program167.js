
/**
 *  Countdigits
 */


function Countdigits(iNo)
{
    if (iNo < 0)
    {
        iNo = -iNo
    }

    let iCount = 0

    while(iNo != 0)
    {
        iDigits = iNo % 10
        iCount++
        iNo = Math.floor(iNo / 10)
    }
    console.log("Summation of digit is : " + iCount)
}

function main()
{
    Countdigits(12345)
}

main()
