<template>
  <div class="contactForm">
    <div class="title">
      <p>LET'S WORK</p>
      <p>TOGETHER</p>
    </div>

    <form action="" @submit.prevent="handleSubmit">
      <div class="container">
        <div>
          <label for="full-name">Full Name</label>
          <input :class="{ 'error-input': errors.fullName }" v-model="formData.fullName" type="text" id="full-name" name="full-name" placeholder="Your Full Name">
          <span v-if="errors.fullName" class="error">{{ errors.fullName }}</span>
        </div>
        
        <div>
          <label for="email">Email</label>
          <input :class="{ 'error-input': errors.email }" v-model="formData.email" type="email" id="email" name="email" placeholder="Your Email">
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </div>
      </div>
        
      <div class="subject">
        <label for="subject">Message</label>
        <textarea :class="{ 'error-input': errors.message }" v-model="formData.message" id="subject" name="message" placeholder="Message" rows="5"></textarea>
        <span v-if="errors.message" class="error">{{ errors.message }}</span>
      </div>
        
      <button type="submit">
        <span>Send</span>
        <img src="@/assets/send-icon.svg" alt="">
      </button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        fullName: '',
        email: '',
        message: ''
      },
      errors: {
        fullName: null,
        email: null,
        message: null
      }
    }
  },
  methods: {
    handleSubmit() {
      if (this.validateForm()) console.log('test')
    },
    validateForm() {
      if (!this.formData.fullName) {
        this.errors.fullName = 'Full Name is required'
      }
      if (!this.formData.email) {
        this.errors.email = 'Email is required'
      } else if (!/\S+@\S+\.\S+/.test(this.formData.email)) {
        this.errors.email = 'Please enter a valid email address.';
      }
      if (!this.formData.message) {
        this.errors.message = 'Message is required'
      }

      return Object.keys(this.errors).length === 0
    }
  }
}
</script>

<style scoped lang="scss">
.contactForm {
  .title {
    font-size: clamp(40px, 6vw, 90px);
    font-weight: bold;

    p:first-child {
      color: #fff;
    }
    p:last-child {
      color: #b6b4bd33;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 50px 0;

    @media (max-width: 768px) {
      margin: 10px 0;
    }

    .error {
      color: #d9534f;
      font-size: 0.875rem;
      margin-top: 0.25rem;
      display: block;
    }
    
    .container {
      display: flex;
      gap: 12px;

      @media (max-width: 768px) {
        flex-direction: column;
      }


      > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        label {
          color: #888;
          font-size: 12px;
        }

        input {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid transparent;
          background-color: #b6b4bd33;
          color: var(--white);
          transition: border-color 0.5s ease, box-shadow 0.3s ease;

          &:focus {
            outline: none;
            border-color: #f46c38;
            box-shadow: 0 0 5px rgba(252, 138, 30, 0.5);
          }
        }

        input.error-input {
          border-color: #d9534f;
          box-shadow: 0 0 5px rgba(252, 138, 30, 0.5);
        }
      }
    }

    .subject {
      display: flex;
      flex-direction: column;
      margin: 20px 0;
      gap: 10px;

      label {
        color: #888;
        font-size: 12px;
      }

      textarea {
        background-color: #b6b4bd33;
        padding: 12px;
        border-radius: 8px;
        color: var(--white);
        border: 1px solid transparent;
        transition: border-color 0.5s ease, box-shadow 0.3s ease;
        &:focus {
          outline: none;
          border-color: #f46c38;
          box-shadow: 0 0 5px rgba(252, 138, 30, 0.5);
        }
      }

      textarea.error-input {
        border-color: #d9534f;
        box-shadow: 0 0 5px rgba(246, 55, 12, 0.5);

      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      border: none;
      background-color: #f46c38;
      padding: 10px 15px;
      color: var(--white);
      border-radius: 8px;
      cursor: pointer;
      font-size: 18px;
      width: 100%;
      img {
        transition: transform 0.3s;
      }

      &:hover img {
        transform: translateX(5px);
      } 
    }

  }
}
</style>