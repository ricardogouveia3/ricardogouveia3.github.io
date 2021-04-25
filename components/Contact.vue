<template>
  <section id="contact">
    <div class="DEF_wrapper">
      <h2>Contact</h2>
      <form action="https://formspree.io/contato@rcrd.me" method="POST">
        <div class="wrapper">
          <div class="wrap-in">
            <label id="formInputNameLabel" for="formInputName">Seu nome</label
            ><input id="formInputName" type="text" name="name" required />
          </div>
          <div class="wrap-in">
            <label id="formInputEmailLabel" for="formInputEmail"
              >Seu email</label
            ><input id="formInputEmail" type="email" name="email" required />
          </div>
        </div>
        <label for="formInputSubject">Assunto</label
        ><input
          id="formInputSubject"
          type="text"
          name="subject"
          required
        /><label for="formInputMessage">Mensagem</label
        ><textarea
          id="formInputMessage"
          cols="30"
          rows="10"
          name="message"
          required
        ></textarea
        ><input id="formInputSubmit" type="submit" value="Enviar" />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  props: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  width: 100%;
  background: linear-gradient(-164deg, #5c5c5c 0%, #2f2f2f 92%);
}
.DEF_wrapper {
  padding: 50px 20px;
}
h2 {
  margin: 0;
  text-align: center;
  font-family: $classic;
  text-transform: uppercase;
  margin-bottom: 50px;
  font-size: 100px;
  color: $white;
  letter-spacing: 1.43px;

  @media (max-width: 700px) {
    font-size: 80px;
  }
  @media (max-width: 500px) {
    font-size: 50px;
  }
}
form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.wrapper {
  width: 100%;
}
.wrap-in {
  width: 50%;
  padding: 0 20px;
  flex-direction: column;

  @media (max-width: 700px) {
    width: 100%;
    padding: 0;
  }
}
.wrapper,
.wrap-in {
  display: flex;

  @media (max-width: 700px) {
    flex-wrap: wrap;
    overflow: hidden;
  }

  &:first-of-type {
    padding-left: 0;
  }
  &:last-of-type {
    padding-right: 0;
  }
}
label {
  color: $white;
  font-weight: 300;
  margin-bottom: 10px;
  font-size: 15px;
}
input {
  border: 0;
  border-bottom: 2px solid $white;
}
textarea {
  margin-top: 20px;
  border: 2px solid $white;
  border-top: 0;
}
input,
textarea {
  border-radius: 0;
  background-color: transparent;
  margin-bottom: 25px;
  color: $white;
  padding: 1ex 1ch;
  transition: border-color 0.5s ease-in-out;

  &:focus {
    border-color: $caribbean-green;
  }
}
.wrap-in label,
.wrap-in input {
  min-width: 300px;
}
input[type='submit'] {
  border: 0;
  padding: 1.5ch;
  text-transform: uppercase;
  background-color: $caribbean-green;
  color: $white;
  font-weight: bold;
  margin-bottom: 50px;
  cursor: pointer;
  transition: background-color 0.4s ease-in-out;

  &:hover {
    background-color: lighten($caribbean-green, 20%);
  }
}
</style>
