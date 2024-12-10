<template>
  <div class="contactForm" id="contact">
    <div class="title">
      <p>LET'S WORK</p>
      <p>TOGETHER</p>
    </div>

    <form @submit.prevent="handleSubmit">
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
        <img v-if="!isSending" src="@/assets/icons/send-icon.svg" alt="">
        <img v-else class="loadingIndicator" src="@/assets/icons/loading-indicator.svg" alt="">
      </button>

      <p>{{ contactStatusMessage }}</p>
    </form>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'ContactForm',
  data() {
    return {
      isSending: false,
      contactStatusMessage: '',
      formData: {
        fullName: '',
        email: '',
        message: ''
      },
      errors: {
        fullName: null,
        email: null,
        message: null,
        hasErrors: false
      },
      statusMessage: ''
    }
  },
  methods: {
    validateForm() {
      if (!this.formData.fullName || this.formData.fullName.trim() === '') {
        this.errors.fullName = 'Full Name is required'
        this.errors.hasErrors = true
      }
      if (!this.formData.email || this.formData.email.trim() === '') {
        this.errors.email = 'Email is required'
        this.errors.hasErrors = true
      } else if (!/\S+@\S+\.\S+/.test(this.formData.email)) {
        this.errors.email = 'Please enter a valid email address.';
        this.errors.hasErrors = true
      }
      if (!this.formData.message || this.formData.message.trim() === '') {
        this.errors.message = 'Message is required'
        this.errors.hasErrors = true
      }
    },
    async handleSubmit() {
      this.validateForm()

      if (!this.errors.hasErrors) {
        this.isSending = true

        emailjs.send(
          process.env.VUE_APP_SERVICE_ID,
          process.env.VUE_APP_TEMPLATE_ID,
          {
            name: this.formData.fullName,
            email: this.formData.email,
            message: this.formData.message
          },
          process.env.VUE_APP_PUBLIC_ID,
        ).then(res => {
          console.log("You have successfully submitted your message", res.text)
          this.contactStatusMessage = 'Thanks for reaching out! you’re message was well and will get back to you soon. 📩'
        },
          (err) => {
            console.log("This form failed to submit, please kindly check your internet connection", err)
          })
        .finally(() => {
          this.isSending = false
          this.formData.fullName = ''
          this.formData.email = ''
          this.formData.message = ''
        })
      }
    },
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.contactForm {
  .title {
    font-size: clamp(40px, 6vw, 90px);
    font-weight: bold;

    p:first-child {
      color: $white;
    }
    p:last-child {
      color: $secondaryColor;
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
      color: $error;
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
          color: $labelColor;
          font-size: 12px;
        }

        input {
          @include styledInput;
          &:focus {
            @include inputFocus;
          }
        }

        input.error-input {
          border-color: $error;
          box-shadow: $inputErrorFocus;
        }
      }
    }

    .subject {
      display: flex;
      flex-direction: column;
      margin: 20px 0;
      gap: 10px;

      label {
        color: $labelColor;
        font-size: 12px;
      }

      textarea {
        @include styledInput;
        &:focus {
          @include inputFocus;
        }
      }

      textarea.error-input {
        border-color: $error;
        box-shadow: $inputErrorFocus;

      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      border: none;
      background-color: $orange;
      padding: 10px 15px;
      color: $white;
      border-radius: 8px;
      cursor: pointer;
      font-size: 18px;
      width: 100%;
      img {
        transition: transform 0.3s;
      }

      .loadingIndicator {
        animation: rotate180 1s infinite;
      }

      &:hover img {
        transform: translateX(5px);
      }
    }

    P {
      margin: 10px 0;
      color: $orange;
    }

  }


@keyframes rotate180 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
}
</style>