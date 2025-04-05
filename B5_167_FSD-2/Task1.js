const a = {

    "Datastructures":

        [

            {

                "Name": "tree",

                "course": "Intro",

                "content": ["1", "B", "C"]

            },

            {

                "Name": "tree1",

                "course": "Intro1",

                "content": ["1", "B", "C", "d"]

            }

        ],

    "xyz":

    {

        "Name": "Graphics",

        "Topic": ["BFS", "CDF", "Sorting"],

    }

}
console.log(a.Datastructures[1].Name)
console.log(a.Datastructures[0].Name)
console.log(a.xyz.Name)
console.log(a.xyz.Topic)
console.log(a.xyz.Topic[0])
console.log(a.Datastructures[0])
console.log(undefined)
console.log(a.xyz)





// From below JSON object fetch the values as asked. 

//  	const a= {

//     	"Datastructures":

//  	   [

//         	{

//              	"Name": "tree",

//                 "course":"Intro",

//                 "content":["1","B","C"]

//         	},

//         	{

//             	"Name": "tree1",

//                 "course":"Intro1",

//                 "content":["1","B","C","d"]

//         	}

//     	],

//     	"xyz":

//     	{

//             "Name":"Graphics",

//             "Topic":["BFS","CDF","Sorting"],

//     	}

//   	}

// Print Below Values On Console

// tree1

// tree

// Graphics

// (3) ['BFS', 'CDF', 'Sorting']

// BFS

// {Name: 'tree1', course: 'Intro1', content: Array(4)}

// undefined

// {Name: 'Graphics', Topic: Array(3)}