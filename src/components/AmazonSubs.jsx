import React from 'react'
//import jspic from './img/js.png'
//import  { concat } from 'lodash'
import { SUBSCRIPTIONS } from '../amazonsubs'
import { useNavigate } from 'react-router-dom';

function AmazonSubs() {
  
  const navigate = useNavigate();
   
  
        var newArray = [];

        for (var i = 0; i < SUBSCRIPTIONS.length; i++) {
          if (SUBSCRIPTIONS[i].quantity) {
            var highQuantity = SUBSCRIPTIONS[i].price * SUBSCRIPTIONS[i].quantity;
           
            SUBSCRIPTIONS[i].price = highQuantity;
          }

          var dateJS = new Date(SUBSCRIPTIONS[i].nextDelivery)
          if (SUBSCRIPTIONS[i].Frequency === "Weeks"){

            var numberOfDaysToAdd = (SUBSCRIPTIONS[i].deliveredEvery * 7);
            if (SUBSCRIPTIONS[i].deliveredEvery === 2) {
               
                dateJS.setDate(dateJS.getDate() + numberOfDaysToAdd);
                
                    // console.log("deliveryMonth: ", dateJS);
                    //dateJS.setDate(dateJS.getDate() + 2); //adds 2 days to the day.
                 var delivery2Weeks = dateJS;
                 newArray.push({ type: 'deliveryWeeks', deliveryMonths: delivery2Weeks });
                 SUBSCRIPTIONS[i].deliveryMonths = delivery2Weeks.toLocaleDateString();
                 //console.log("deliveryMonth: ", delivery2Weeks.toLocaleDateString());
                    //var deliveryYear = dateJS.getFullYear();
            
            }

            else if (SUBSCRIPTIONS[i].deliveredEvery === 7) {
                
                dateJS.setDate(dateJS.getDate() + numberOfDaysToAdd);
                
                    // console.log("deliveryMonth: ", dateJS);
                //dateJS.setDate(dateJS.getDate() + 2); //adds 2 days to the day.
                 var delivery7Weeks = dateJS;
                 newArray.push({ type: 'deliveryWeeks', deliveryMonths: delivery7Weeks });
                 SUBSCRIPTIONS[i].deliveryMonths = delivery7Weeks.toLocaleDateString();
                // console.log("deliveryMonth: ", delivery7Weeks.toLocaleDateString());
                    //var deliveryYear = dateJS.getFullYear();
            
            }
    }
          if (SUBSCRIPTIONS[i].Frequency === "Month"){

                if (SUBSCRIPTIONS[i].deliveredEvery === 1) {
                    dateJS.setMonth(dateJS.getMonth() + 1);
                        // console.log("deliveryMonth: ", dateJS);
                        //dateJS.setDate(dateJS.getDate() + 2); //adds 2 days to the day.
                     var delivery1Month = dateJS;
                     newArray.push({ type: 'deliveryMonth', deliveryMonth: delivery1Month });
                     SUBSCRIPTIONS[i].deliveryMonths = delivery1Month.toLocaleDateString();
                     //console.log("deliveryMonth: ", delivery1Month.toLocaleDateString());
                        //var deliveryYear = dateJS.getFullYear();
                
          }
        }
          if (SUBSCRIPTIONS[i].Frequency === "Months"){

                if (SUBSCRIPTIONS[i].deliveredEvery === 2) {
                    dateJS.setMonth(dateJS.getMonth() + 2);
                        // console.log("deliveryMonth: ", dateJS);
                        //dateJS.setDate(dateJS.getDate() + 2); //adds 2 days to the day.
                     var delivery2Months = dateJS;
                     newArray.push({ type: 'deliveryMonths', deliveryMonths: delivery2Months });
                    SUBSCRIPTIONS[i].deliveryMonths = delivery2Months.toLocaleDateString();
                    // console.log("delivery2Month: ", delivery2Months.toLocaleDateString());
                        //var deliveryYear = dateJS.getFullYear();
                } 

                else if (SUBSCRIPTIONS[i].deliveredEvery === 3) {
                    dateJS.setMonth(dateJS.getMonth() + 3);
                  
                 var delivery3Months = dateJS;
                 newArray.push({ type: 'deliveryMonths', deliveryMonths: delivery3Months });
                 SUBSCRIPTIONS[i].deliveryMonths = delivery3Months.toLocaleDateString();
                 //console.log("delivery2Month: ", delivery3Months.toLocaleDateString());
                }

                else if (SUBSCRIPTIONS[i].deliveredEvery === 4) {
                    dateJS.setMonth(dateJS.getMonth() + 4);
                    
                 var delivery4Months = dateJS;
                 newArray.push({ type: 'deliveryMonths', deliveryMonths: delivery4Months });
                 SUBSCRIPTIONS[i].deliveryMonths = delivery4Months.toLocaleDateString();
                 //console.log("delivery2Month: ", delivery4Months.toLocaleDateString());
                }
                
                else if (SUBSCRIPTIONS[i].deliveredEvery === 5) {
                    dateJS.setMonth(dateJS.getMonth() + 5);
                   
                 var delivery5Months = dateJS;
                 newArray.push({ type: 'deliveryMonths', deliveryMonths: delivery5Months });
                 SUBSCRIPTIONS[i].deliveryMonths = delivery5Months.toLocaleDateString();
                 //console.log("delivery2Month: ", delivery5Months.toLocaleDateString());
                }
                
                else if (SUBSCRIPTIONS[i].deliveredEvery === 6) {
                    dateJS.setMonth(dateJS.getMonth() + 6);
                   
                 var delivery6Months = dateJS;
                 newArray.push({ type: 'deliveryMonths', deliveryMonths: delivery6Months});
                 SUBSCRIPTIONS[i].deliveryMonths = delivery6Months.toLocaleDateString();
                 //console.log("delivery2Month: ", delivery6Months.toLocaleDateString());
                }
          }

    
         
        }
        
        console.log("newArray: ", SUBSCRIPTIONS);
        
      // Calculate the sum of all prices using reduce
      var totalPrice = SUBSCRIPTIONS.reduce((accumulator, currentSubscription) => {
        return accumulator + currentSubscription.price;
      }, 0);
      
      console.log(totalPrice);

      SUBSCRIPTIONS.sort((sub1, sub2) => new Date(sub1.deliveryMonths) - new Date(sub2.deliveryMonths));
      console.log("newArray: ", SUBSCRIPTIONS);
     

   var sub = SUBSCRIPTIONS.map(subs => (
    <tr key={subs.id}>
    <td className="border border-indigo-500 text-center" >{subs.productName}</td>
    <td className="border border-indigo-500 text-center" >{subs.quantity}</td>
    <td className="border border-indigo-500 text-center" >${subs.price.toFixed(2)}</td>
    <td className="border border-indigo-500 text-center" >{subs.nextDelivery}</td>
   
    <td className="border border-indigo-500 text-center" >{subs.deliveredEvery}</td>
    <td className="border border-indigo-500 text-center" >{subs.Frequency}</td>
    <td className="border border-indigo-500 text-center" >{subs.deliveryMonths}</td>
    </tr>
    )) 
   


    return (
        <div className="blog-post-intro">
        <h2>Amazon Subscription Chart</h2>
        <div className='imgWrapperthree'>
          <hr></hr> 
          {/* <img src={jspic} alt="React" className="img-fluidthree rounded" />  */}
        </div>
        <div className="wrapper">
          <h5 className="text-uppercase"> </h5>
          <hr></hr>
          <p>
          </p>
        
         
          <p>
          </p>
         
          <p>
          </p>
         

          

          <p>
          </p>
          <table className="border-separate border border-indigo-500 hover:border-collapse shadow-xl">
            <thead>
          
              <tr className='bg-violet-500 text-white text-center'>
                <th className="border border-indigo-500">Product Name</th>
                <th className="border border-indigo-500">Quantity</th>
                <th className="border border-indigo-500">Final Price</th>
                <th className="border border-indigo-500">Current Delivery Date</th>
                
                <th className="border border-indigo-500">Delivered Every</th>
                <th className="border border-indigo-500">Frequency</th>
                <th className="border border-indigo-500">Next Delivery Date</th>
              </tr>
            </thead>
            <tbody>
              {sub}
            </tbody>
          </table>
          <br></br>
          <p>
           
          </p>
          <br></br>
          <hr></hr>

          <div className="parent-of-goBack">
                <button type="button" className='goBack' onClick={(e) => {
                    e.preventDefault(); navigate('/projects'); }}>
                    Go Back 
                </button>
            </div>
        </div>
      </div>
    );
};

export default AmazonSubs;