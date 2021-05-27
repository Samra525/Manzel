<template>
  
    <form
    id="contact-form" 
    method="POST"
    action="https://docs.google.com/forms/u/0/d/e/
    1FAIpQLSe_YJ0Ixq91chVXksMZsC7ULHPMThgXI19-Or81LsFCnVs7nQ/formResponse">

    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe_YJ0Ixq91chVXksMZsC7ULHPMThgXI19-Or81LsFCnVs7nQ/viewform?embedded=true" width="640" 
    height="1078" frameborder="0" marginheight="0" marginwidth="0" scrolling="no">Loading…</iframe>

<!-- <label>Name</label>
          <input name="entry.2005620554" type="text" />

          <label>Email</label>
          <input name="entry.1045781291" type="email" required />

<div class="form-group">
 <button class="btn btn-raised btn-block btn-danger" type="submit" value="submit">Submit →</button>
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