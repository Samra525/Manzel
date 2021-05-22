<template>
    <form
    id="contact-form" 
    method="POST" 
    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe-lfH_5vpNvIoZZQnDPTtX15XPT4AKqe1kReIwG84whC1nTQ/formResponse">

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe-lfH_5vpNvIoZZQnDPTtX15XPT4AKqe1kReIwG84whC1nTQ/viewform?embedded=true" 
        width="640" height="641" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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