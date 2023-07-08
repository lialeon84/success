import React from 'react'
import jspic from './img/js.png'
import _ from 'lodash'


function JSpage() {
    var people = [
        {
            id: 1,
            user:"Steven",
            item:"House"
        },
        {
            id: 2,
            user:"Rose",
            item:"Car"
        },
        {   id: 3,
            user:"Jessica",
            item:"Boat"
        }
    ];
    var pets = [
        {
            id: 1,
            user:"Steven",
            pet:"Dog"
        },
        {
            id: 2,
            user:"Rose",
            pet:"Cat"
        },
        {
            id: 3,
            user:"Jessica",
            pet:"Owl"
        },
        {
            id: 4,
            user:"Mike",
            pet:"Bird"

        }

    ];

    var merged = _.merge(_.keyBy(people, 'user'), _.keyBy(pets, 'user'))
    var valuesOf = _.values(merged)

    
 

   var ppl = valuesOf.map(people => (
    <tr key={people.id}>
    <td className="border border-indigo-500 ..." >{people.user}</td>
    <td className="border border-indigo-500 ..." >{people.item}</td>
    <td className="border border-indigo-500 ..." >{people.pet}</td>
    </tr>
    )) 
   
  

    // const handleClick = (e) => {
    //     e.preventDefault();
       
    //   };


    return (
        <div className="blog-post-intro">
        <h2>Mastering JavaScript Functions</h2>
        <div className='imgWrapperthree'>
          <hr></hr> 
          <img src={jspic} alt="React" className="img-fluidthree rounded" /> 
        </div>
        <div className="wrapper">
          <h5 className="text-uppercase">A Comprehensive Guide to Functionality and Efficiency</h5>
          <hr></hr>
          <p>
            Explore the world of JavaScript functions, arrays, object-oriented programming, and the power of LoDash.js. Learn how to utilize LoDash to merge data, such as IDs, names, or items, while preserving the necessary information.
          </p>
          {/* <p className="text-red-800 text-xs">*Side note*</p> */}
          {/* <p>Lodash vs Underscore</p> */}
          <p>
            Lodash offers advanced capabilities, including cloning and comparing deeply nested objects, whereas Underscore lacks this functionality.
          </p>
          <p>
            To install Lodash, use the following command:
          </p>
          <pre rel="JavaScript" data-line>
            <code markup="tt">
              npm i lodash
            </code>
          </pre>
          <p>
            Then, import it in your code:
          </p>
          <pre rel="JavaScript" data-line>
            <code markup="tt">
              import _ from 'lodash'
            </code>
          </pre>
          <p>
            Let's look at an example that demonstrates the functionality:
          </p>
          <pre rel="JavaScript" data-line className='w-100 h-48'>
            <code markup="tt">
              <p className='text-white text-sm px-8'>
                var people = [
                {'{'}
                user: "Steven",
                item: "House"
                {'}'},
                {'{'}
                user: "Rose",
                item: "Car"
                {'}'},
                {'{'}
                user: "Jessica",
                item: "Boat"
                {'}'},
                ];
              </p>
              <p className='text-white text-sm px-8'>
                var pets = [
                {'{'}
                user: "Steven",
                pet: "Dog"
                {'}'},
                {'{'}
                user: "Rose",
                pet: "Cat"
                {'}'},
                {'{'}
                user: "Jessica",
                pet: "Owl"
                {'}'},
                {'{'}
                user: "Mike",
                pet: "Bird"
                {'}'},
                ];
              </p>
              <p className='text-white text-sm px-8'>
                var merged = _.merge(_.keyBy(people, 'user'), _.keyBy(pets, 'user'))
              </p>
              <p className='text-white text-sm px-8'>
                var valuesOf = _.values(merged)
              </p>
              <p className='text-white text-sm px-8'>
                console.log(valuesOf)
              </p>
            </code>
          </pre>
          <p>
          Here's a breakdown of the relevant code using Lodash:
          </p>
          <p>
          _.keyBy(people, 'user') creates an object where the user property serves as the key, resulting in an object that 
          allows easy access to information based on the user.
          </p>

          <p>
            .keyBy(pets, 'user') performs the same operation on the pets array, creating another object with the user 
            property as the key.
          </p>

          <p> 
            _.merge() combines the two objects generated from people and pets based on the common keys (user property). 
            The resulting merged object contains the merged data.
          </p>

          <p> Following this, the code uses _.values() to extract the values from the merged object and assign them to the valuesOf variable.
          Finally, the code logs the valuesOf variable, which represents an array containing the merged data, to the console.
          </p>

          <p>
            See the results in the table below:
          </p>
          <table className="border-separate border border-indigo-500 hover:border-collapse shadow-xl">
            <thead>
              <tr className='bg-violet-500 text-white'>
                <th className="border border-indigo-500">People</th>
                <th className="border border-indigo-500">Item</th>
                <th className="border border-indigo-500">Pet</th>
              </tr>
            </thead>
            <tbody>
              {ppl}
            </tbody>
          </table>
          <br></br>
          <p>Lodash is utilized to merge data from two arrays (people and pets) based on a common key, 
            which is the user property. The goal is to combine the information from both arrays to generate 
            a new dataset that can be displayed in a table format.
           
          </p>
          <br></br>
          <hr></hr>
        </div>
      </div>
    );
};

export default JSpage;