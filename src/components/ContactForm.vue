<template>

    <form
    id="contact-form" 
    method="POST"
    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe_YJ0Ixq91chVXksMZsC7ULHPMThgXI19-Or81LsFCnVs7nQ/formResponse">

    <!-- <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe_YJ0Ixq91chVXksMZsC7ULHPMThgXI19-Or81LsFCnVs7nQ/viewform?embedded=true" width="640" 
    height="1078" frameborder="0" marginheight="0" marginwidth="0" scrolling="no">Loading…</iframe> -->

<div class="w3-section">
            <label>Name *</label>
            <input type="text" name="entry.2005620554" placeholder="Please enter your name"/>
        </div>
        <div>
            <label>Email *</label>
            <input type="email" name="entry.1045781291"  placeholder="Please enter your email address" required/>
        </div>
        <div>
          <label>Message *</label>
            <textarea name="entry.2037741915"  rows="5" placeholder="Please enter your message" ></textarea>
        </div>

<div>
            <label>Address</label>
            <textarea input type="text" rows="4" name="entry.1065046570"  placeholder="Please enter your address" required/>
        </div>


<div>
            <label>Phone number</label>
            <input type="numbers" name="entry.1166974658" placeholder="Please enter your phone number" required/>
        </div>

<div>
            <label>Comments</label>
            <textarea input type="text" rows="5"  name="entry.839337160"  placeholder="Please enter your comments" required/>
        </div>





        <div class="form-group">
 <button class="btn btn-raised btn-block btn-danger" type="submit" value="submit">Submit →</button>
						 	</div>



               <!-- <div id="error_message" style="width:100%; height:100%; display:none; ">
						<h4>Error</h4>
						Sorry there was an error sending your form.
						</div>
						<div id="success_message" style="width:100%; height:100%; display:none; ">
						<h2>Success! Your Message was Sent Successfully.</h2>
						</div> -->

    </form>

</template>

<script>
 
export default {
    name: 'ContactForm',
    props: ['action']
};

</script>

<style>
form {
  width: 100%;
}
form label {
  display: block;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

form input, form textarea {
  display: block;
  width: 100%;
  border-radius: 5px;
  font-size: 1.2rem;
  box-shadow: none ! important;
  outline: none ! important;
  border-style: none;
  background-color: lightgrey;
  -webkit-appearance: none;
}
form input {
  height: 2rem;
}
form button {
  background: none;
  box-shadow: none;
  border: 0;
  font-size: 1.2rem;
  border-radius: 5px;
  background-color: #00a672;
  padding: 10px;
  color: #fff;
  display: block;
  min-width: 100px;
  margin:5px 0;
}
</style>