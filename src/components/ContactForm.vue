<template>
  <div class="contactForm" id="contact">
    <div class="title">
      <p>LET'S WORK</p>
      <p>TOGETHER</p>
    </div>

    <form @submit.prevent="handleSubmit" id="contactForm">
      <div class="container">
        <div>
          <label for="full-name">Full Name</label>
          <input :class="{ 'error-input': errors.fullName.message }" v-model="formData.fullName" type="text" id="full-name" name="full-name" placeholder="Your Full Name">
          <span v-if="errors.fullName.message" class="error">{{ errors.fullName.message }}</span>
        </div>
        
        <div>
          <label for="email">Email</label>
          <input :class="{ 'error-input': errors.email.message }" v-model="formData.email" type="email" id="email" name="email" placeholder="Your Email">
          <span v-if="errors.email.message" class="error">{{ errors.email.message }}</span>
        </div>
      </div>
        
      <div class="subject">
        <label for="subject">Message</label>
        <textarea :class="{ 'error-input': errors.message.message }" v-model="formData.message" id="subject" name="message" placeholder="Message" rows="5"></textarea>
        <span v-if="errors.message.message" class="error">{{ errors.message.message }}</span>
      </div>
        
      <button type="submit" :disabled="!isFormValid">
        <span>Send</span>
        <img v-if="!isSending" src="@/assets/icons/send-icon.svg" alt="send email icon">
        <img v-else class="loadingIndicator" src="@/assets/icons/loading-indicator.svg" alt="loading indicator">
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
      disableValidation: false,
      formData: {
        fullName: '',
        email: '',
        message: ''
      },
      errors: {
        fullName: { message: '', invalid: true },
        email: { message: '', invalid: true },
        message: { message: '', invalid: true },
      },
      isClearingForm: false,
      statusMessage: ''
    }
  },
  watch: {
    'formData.email'() {
      if (!this.isClearingForm) this.validateEmeail()
    },
    'formData.fullName'() {
      if (!this.isClearingForm) this.validateFullName()
    },
    'formData.message'() {
      if (!this.isClearingForm) this.validateMessage()
    }
  },
  computed: {
    isFormValid() {
      return Object.values(this.errors).every(error => !error.invalid);
    }
  },
  methods: {
    resetErrors() {
      for (const key in this.errors) {
        this.errors[key] = { message: '', invalid: true };
      }
    },
    validateEmeail() {
      if (!this.formData.email || this.formData.email.trim() === '') {
        this.errors.email.message = 'Email is required'
        this.errors.email.invalid = true
      } else if (!/\S+@\S+\.\S+/.test(this.formData.email)) {
        this.errors.email.message = 'Please enter a valid email address.'
        this.errors.email.invalid = true
      } else {
        this.errors.email.message = ''
        this.errors.email.invalid = false
      }
    },
    validateFullName() {
      if (!this.formData.fullName || this.formData.fullName.trim() === '') {
        this.errors.fullName.message = 'Full Name is required'
        this.errors.fullName.invalid = true
      } else {
        this.errors.fullName.message = ''
        this.errors.fullName.invalid = false
      }
    },
    validateMessage() {
      if (!this.formData.message || this.formData.message.trim() === '') {
        this.errors.message.message = 'Message is required'
        this.errors.message.invalid = true

      } else {
        this.errors.message.message = ''
        this.errors.message.invalid = false
      }
    },
    async handleSubmit() {
      if (this.isFormValid) {
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
          this.isClearingForm = true
          this.isSending = false

          this.formData.fullName = ''
          this.formData.email = ''
          this.formData.message = ''
          this.resetErrors()

          this.$nextTick(() => {
            this.isClearingForm = false
          });
        })
      }
    },
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.contactForm {
  opacity: 0;
  .title {
    @include sectionTitle;
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
        font-family: 'Poppins', sans-serif;
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

      &:disabled {
        opacity: .6;
        cursor: default;
      }

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