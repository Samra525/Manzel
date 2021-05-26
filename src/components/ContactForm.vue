<template>
    <form
    id="contact-form" 
    method="POST" 
    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeEBD2MQttZul7BbxDbgw1HK02tzvx4Ss2DL-fRM5aLd1FBaw/formResponse">
  <iframe src="https://formfacade.com/headless/108459905021707939487/home/form/1FAIpQLSeEBD2MQttZul7BbxDbgw1HK02tzvx4Ss2DL-fRM5aLd1FBaw" scrolling="no" frameBorder="0"
   width="100%" style="height:800px; /*change height as required*/ overflow-y:hidden;"></iframe>
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