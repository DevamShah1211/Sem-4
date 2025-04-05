const sub = {
    "FSD": [
        {
            "Topic": "HTML",
            "course": "Beginer",
            "content": ["tags", "table", "form"],
        },
        {
            "Topic": "CSS",
            "course": "Beginer",
            "content": ["tags", "table", "form"]
        }
    ]
};

for (const item of sub.FSD) {
    console.log(item.Topic);
    console.log(item.course);
    console.log(item.content);
}



// Consider below JSON object and fetch values using for loop (for…in/for…of).

// const sub =

// {

// "FSD": [

// {

// "Topic": "HTML",

// "course": "Beginer",

// "content": ["tags", "table", "form"],

// },

// {

// "Topic": "CSS",

// "course": "Beginer",

// "content": ["tags", "table", "form"]

// }

// ]};