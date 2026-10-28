
/**
 *  AverageOfDigit
 */


function AverageOfDigit(iNo)
{
    let iDigits = 0 , iSum = 0 , iCount = 0 , fAvg = 0


     // Fix: If the number is 0, the average of its digits is simply 0
    if (iNo === 0)
    {
        return 0;
    }

    if (iNo < 0)
    {
        iNo = -iNo
    }

    while(iNo != 0)
    {
        iDigits = iNo % 10
        iSum += iDigits;
        iCount++
        iNo = Math.floor(iNo / 10)
    }
   fAvg = iSum / iCount;  
   return fAvg
}

function main()
{

   let iRet =  AverageOfDigit(1234)
   console.log("Average of digit : " , iRet)
   
   
   
}

main()
