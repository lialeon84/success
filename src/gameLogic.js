

export const steps = [

    {
        id: "Greet",
        message: "Hello, welcome to Jailbreak!",
        trigger: "Ask Name",
       
    },
    {
       
        id: "Ask Name",
        message: "What's your name?",
        trigger: "waiting1"
        
        
    },
    {
       
        id: "waiting1",
        user:true,
        trigger: "Name"
        
    },
    {
        id: "Name",
        message: "Hey, {previousValue}, ready to get out of here?",
        trigger: "waiting2"
        
    },
    {
        id: "waiting2",
        options: [
            {
            value: "YES", 
            label: "YES", 
            trigger: "YES"
        },
            {
                value: "NO",
                label: "NO", 
                trigger: "NO"
            }
        ],
        
    },
    {
        id: "YES",
        message:"Here's the deal",
        end: true,
    },
    {
        id: "NO",
        message:"You're funny",
        end: true,
    }


]