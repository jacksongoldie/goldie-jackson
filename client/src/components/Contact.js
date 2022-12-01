import { useState } from 'react';
import { MDBTextArea, MDBInput, MDBBtn} from 'mdb-react-ui-kit';

function Contact() {
  const [formData, setFormData] = useState({
    user_attributes: 
      {name:'',
      email:''},
      message:'',
    })
  const [response, setResponse] = useState('')

  function handleChange(e){
    setFormData({...formData, user_attributes: {...formData.user_attributes, [e.target.name]: e.target.value}})
  }

  function handleSubmit(e){
    e.preventDefault()
    setResponse('')
    fetch(`/contacts`,{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(r=>{
      if(r.ok){
        r.json().then(
          setResponse('Your message has been sent!'),
          setFormData({
          user_attributes: 
            {name:'',
            email:''},
          message:'',
          })
        )
      }
      else{
        r.json().then(setResponse('Hmm. Something went wrong. Please refresh and try again.'))
      }
    })
  }

  return (
    <div style={{ margin:'10%' }}>
        Contact Me
        <div style={{ width:'75%', margin:'auto' }}>
          <form onSubmit={handleSubmit}>
            <MDBInput label='Name' name='name' id='typeText' type='text' value={formData.user_attributes.name} onChange={handleChange} style={{ marginTop:'.5em'}} required />
            <MDBInput label='Email' name='email' id='typeEmail' type='email' value={formData.user_attributes.email} onChange={handleChange} style={{ marginTop:'.5em'}} required/>
            <MDBTextArea label='Message' name='message' id='textAreaExample' value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})} rows={4} style={{ marginTop:'.5em'}} required/>
            <MDBBtn type='Submit' style={{ marginTop:'.5em'}}>Submit</MDBBtn>
          </form>
        </div>
        {response ? <p>{response}</p> : null}
    </div>
  )
};

export default Contact;