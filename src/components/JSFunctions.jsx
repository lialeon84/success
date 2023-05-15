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
            
            <h2>JS Functions</h2>
            
             <div className='imgWrapperthree'>
                    <hr></hr> 
                    <img src={jspic} alt="React" className="img-fluidthree rounded" /> 
                 
            </div>
           

            
            <div className="wrapper">
            <h5 className="text-uppercase">Here's a bit about Functions, Arrays, OOP and LoDash.js</h5>
            <hr></hr>
            
            <p>Use Lodash to merge ID/Name/items with the same user ID/Name/items without replacing any of what is needed.
           
            </p>
            <p className="text-red-800 text-xs">*Side note*</p> <h1 className='text-xs'>Lodash vs Underscore </h1>
            <p className='text-xs'>
                Lodash allows cloning and comparing objects that are deeply nested. Underscore doesn't allows
                cloning and comparing of nested objects.
            </p>

            <p>
                To install Lodash
            </p>
                    
                    <pre rel="JavaScript" data-line> 
                      <code markup="tt">
                      npm i lodash
                      </code>
                  </pre> 
                  
                  <p>
                Then import
               </p>
               <pre rel="JavaScript" data-line> 
                      <code markup="tt">
                      import _ from 'lodash'
                      </code>
                  </pre> 
                        
                  <p> The following example will illustrate how it works </p>
                
                    <pre rel="JavaScript" data-line className='w-100 h-48'> 
                     <code markup="tt">
                    <p className='text-white text-sm px-8'>
                            var people = [
                            {'{'}
                                    user:"Steven",
                                    item:"House"
                            {'}'},
                            {'{'}
                                    user:"Rose",
                                    item:"Car"
                             {'}'},
                             {'{'}
                                    user:"Jessica",
                                    item:"Boat"
                             {'}'},
                            ];
                            </p>
                           <p className='text-white text-sm px-8'> 
                            var pets = [
                                {'{'}
                                    user:"Steven",
                                    pet:"Dog"
                                {'}'},
                                {'{'}
                                    user:"Rose",
                                    pet:"Cat"
                                {'}'},
                                {'{'}
                                    user:"Jessica",
                                    pet:"Owl"
                                {'}'},
                                {'{'}
                                    user:"Mike",
                                    pet:"Bird"

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
                       See results below
                    </p>
                  
                    <table className="border-separate border border-indigo-500 hover:border-collapse shadow-xl">
                    <thead>
                        <tr className='bg-violet-500 text-white'>
                        <th className="border border-indigo-500 ">People</th>
                        <th className="border border-indigo-500">Item</th>
                        <th className="border border-indigo-500 ">Pet</th>
                        </tr>
                    </thead>
                    <tbody>
                 
                        {ppl}
                     
                    </tbody>
                    </table>
                    
                   <br></br>

                    {/* <pre rel="JavaScript" data-line> 
                     <code markup="tt">
                        
                     </code>
                    </pre>  */}
                    
                    <p>
                    </p>

                    <p></p>

                        {/* <pre rel="JavaScript" data-line> 
                     <code markup="tt">
                        
                     </code>
                    </pre>  */}

                    <p>
                        
                    </p>

                    <p></p>

                    {/* <pre rel="JavaScript" data-line> 
                     <code markup="tt">
                      
                     </code>
                    </pre> */}

                    <p>
                        
                     </p>

                    <p></p>

                    {/* <pre rel="JavaScript" data-line> 
                    <code markup="tt">
                        
                    </code>
                    </pre>  */}

                    <p> </p>

                    <p></p>

                    {/* <pre rel="JavaScript" data-line> 
                    <code markup="tt">
                        
                    </code>
                    </pre> */}

                    <p> 
                    </p>

                    {/* <pre rel="JavaScript" data-line> 
                    <code markup="tt">
                       
                    </code>
                    </pre>  */}
                    
                    
                    <hr></hr>
            </div>
        </div>
    );
};

export default JSpage;