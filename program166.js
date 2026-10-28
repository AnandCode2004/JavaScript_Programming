
/**
 *  SumOfDigits
 */


function DigitsSum(iNo)
{
    if (iNo < 0)
    {
        iNo = -iNo
    }

    let iSum = 0

    while(iNo != 0)
    {
        iDigits = iNo % 10
        iSum += iDigits;
        iNo = Math.floor(iNo / 10)
    }
    console.log("Summation of digit is : " + iSum)
}

function main()
{
    DigitsSum(12345)
}

main()
