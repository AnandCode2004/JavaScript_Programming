class  Demo
{
    constructor()  
    {
        this.No1 = 11;
        this.No2 = 21;
        console.log("inside constructor")
    }
}

function main()
{
    dobj1 = new Demo()
    console.log(dobj1.No1);
    console.log(dobj1.No2);
    
}

main()

