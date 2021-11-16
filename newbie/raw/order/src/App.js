import React, {useEffect} from 'react';
import './App.css';
import image from './images/woman-desktop.svg'
import bg from './images/bg-pattern-mobile.svg'
function App() {
  let toggleRef= document.querySelectorAll('.app__QuestionAnswer')
 

useEffect(()=>{

  let toggleRef= document.querySelectorAll('.app__QuestionAnswer')
  
  function toggleFunc(){
    toggleRef.forEach((tog)=>
    tog.classList.remove('active')
    )
    this.classList.add('active')
  }
   


 toggleRef.forEach((tog)=>
 tog.addEventListener('mouseenter',toggleFunc)
 )
 },[toggleRef])


  return (
    <div className="app">
      <div className='app__Card'>
      <div className='app__Image'>
        <img src={image}/>
        <img src={bg}/>
        </div>
        <div className='app__Content'>
            <h1>FAQ</h1>
            <div className='app__Questions'>
                <div className='app__QuestionAnswer' >
                    <div className='app__Question'>
                        <p>How many team members can i invite?</p>
                        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                    </div>
                    <div className='app__Answer'>
                          <p> You can invite up to 2 additional users on the Free plan. There is no limit on 
                            team members for the Premium plan.</p>
                    </div>
                 </div>

                 <div className='app__QuestionAnswer'>
                    <div className='app__Question'>
                        <p> What is the maximum file upload size?</p>
                        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
               
                    </div>
                    <div className='app__Answer'>
                          <p>   No more than 2GB. All files in your account must fit your allotted storage space.
</p>
                    </div>
                 </div><div className='app__QuestionAnswer'>
                    <div className='app__Question'>
                        <p>How do I reset my password?</p>
                        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
               
                    </div>
                    <div className='app__Answer'>
                          <p>Click “Forgot password” from the login page or “Change password” from your profile page.
  A reset link will be emailed to you.</p>
                    </div>
                 </div><div className='app__QuestionAnswer'>
                    <div className='app__Question'>
                        <p>Can I cancel my subscription?</p>
                        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
               
                    </div>
                    <div className='app__Answer'>
                          <p>   Yes! Send us a message and we’ll process your request no questions asked.
</p>
                    </div>
                 </div><div className='app__QuestionAnswer'>
                    <div className='app__Question'>
                        <p>Do you provide additional support?</p>
                        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
               
                    </div>
                    <div className='app__Answer'>
                          <p>   Chat and email support is available 24/7. Phone lines are open during normal business hours.
</p>
                    </div>
                 </div>
            
          </div>

         
        </div>
      </div>
        

    </div>
  );
}

export default App;
