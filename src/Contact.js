import React from "react";
const Contact = () => {
  const [firstName,setFirstName] = React.useState('');
  const [lastname,setLastName] = React.useState('');
  const [phone,setPhone] = React.useState('');
  const [email,setEmail] = React.useState('');

  const handleSubmit = (event)=>{
    alert('Contact deatails:' +firstName+' '+lastname+' '+email+''+phone); 

    event.preventDefault();

    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
  }
  const fieldStyle = {
    marginBottopm:"5x"
  };

  return(
    <form onSubmit={handleSubmit}>
    <h1 style={{color:"blue"}}>Contact</h1>
    <h5>FirstName: <input type="text" style ={fieldStyle}placeholder="Enter Your First Name" value={firstName} onChange={function (e){setfirstName(e.target.value)}}/></h5>

    <h5>LastName: <input type="text" style ={fieldStyle}placeholder="Enter Your Last Name" value={lastname} onChange={function (e){setLastName(e.target.value)}}/></h5>

    <h5>Phone:&nbsp; &nbsp; &nbsp; &nbsp;<input type="text" style ={fieldStyle}placeholder="Enter your Phone Number" value={phone} onChange={function (e){setPhone(e.target.value)}}/></h5>

    <h5>Email: &nbsp; &nbsp; &nbsp; &nbsp;<input type="email" style ={fieldStyle}placeholder="Enter your email Address" value={email} disply="block" onChange={function (e){setEmail(e.target.value)}}/></h5>
    <input type="submit" value="Show Contact Deatails" disply="inline-block"/>

    </form>
  );
}
export default Contact;

