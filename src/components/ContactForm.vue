<template>
    <form
    id="contact-form" 
    method="post" 
    :action=action 
    name= "contact" 
    enctype="multipart/form-data" >

        <div>
            <label>Full name</label>
            <input type="text" name="fullname" />
        </div>
        <div>
            <label>Email</label>
            <input type="email" name="email" />
        </div>
        <div>
            <label>Message</label>
            <textarea name="message" rows="5"></textarea>
        </div>
        <div class="form-group">
						 		<button class="btn btn-raised btn-block btn-danger">Submit →</button>
						 	</div>
               <div id="error_message" style="width:100%; height:100%; display:none; ">
						<h4>Error</h4>
						Sorry there was an error sending your form.
						</div>
						<div id="success_message" style="width:100%; height:100%; display:none; ">
						<h2>Success! Your Message was Sent Successfully.</h2>
						</div>
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