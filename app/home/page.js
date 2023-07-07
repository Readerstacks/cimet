 
import {ApiService} from "../../services/ApiService"
import Plan from "../components/plan";

export default async function Home2() {
  const data = await ApiService.getProducts();
   
  function hasPlans(plans){
     return  plans && plans.data && plans.data.electricity && plans.data.electricity.length 
  }
 
  return (<>
     <h1>Electiricity Plans</h1>
      
      {hasPlans(data) && data.data.electricity.map(plan=>{
          return <><Plan item={plan} /></>
      })}
      {!hasPlans(data) &&  <div>No Data found...</div>}

     </>
  )
}