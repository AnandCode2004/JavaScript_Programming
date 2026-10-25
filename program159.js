class  Demo
{
    constructor(A,B)  
    {
        this.No1 = A;
        this.No2 = B;
        console.log("inside constructor")
    }

    Display()
    {
        console.log("Inside display");
        
    }
}

function main()
{
    dobj1 = new Demo(51,101)
    console.log(dobj1.No1);
    console.log(dobj1.No2);
    dobj1.Display()
}

main()

