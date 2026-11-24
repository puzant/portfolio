<template>
  <div class="contact-form" id="contact">
    <div class="title">
      <p>LET'S WORK</p>
      <p>TOGETHER</p>
    </div>

    <div class="contact-layout">
      <form @submit.prevent="handleSubmit" id="contactForm">
        <div class="container">
          <div>
            <label for="first-name">First Name</label>
            <input :class="{ 'error-input': errors.firstName.message }" v-model="formData.firstName" type="text" id="first-name" name="first-name" placeholder="First name">
            <span v-if="errors.firstName.message" class="error">{{ errors.firstName.message }}</span>
          </div>

          <div>
            <label for="last-name">Last Name</label>
            <input :class="{ 'error-input': errors.lastName.message }" v-model="formData.lastName" type="text" id="last-name" name="last-name" placeholder="Last name">
            <span v-if="errors.lastName.message" class="error">{{ errors.lastName.message }}</span>
          </div>
        </div>

        <div class="field">
          <label for="email">Email</label>
          <input :class="{ 'error-input': errors.email.message }" v-model="formData.email" type="email" id="email" name="email" placeholder="Your email address">
          <span v-if="errors.email.message" class="error">{{ errors.email.message }}</span>
        </div>

        <div class="subject">
          <label for="message">Message</label>
          <textarea :class="{ 'error-input': errors.message.message }" v-model="formData.message" id="message" name="message" placeholder="Tell me about your project or challenge" rows="7"></textarea>
          <span v-if="errors.message.message" class="error">{{ errors.message.message }}</span>
        </div>
          
        <button type="submit" :disabled="isSending">
          <span>Send</span>
          <img v-if="!isSending" src="@/assets/icons/send-icon.svg" alt="send email icon">
          <img v-else class="loading-indicator" src="@/assets/icons/loading-indicator.svg" alt="loading indicator">
        </button>

        <p v-if="contactStatusMessage">{{ contactStatusMessage }}</p>
      </form>

      <aside class="contact-side">
        <p class="contact-side__eyebrow">Other ways to connect</p>
        <h3 class="contact-side__title">Prefer a direct message?</h3>
        <p class="contact-side__text">If a form isn’t your thing, you can also reach me through these channels. I’m always open to a good technical conversation.</p>

        <div class="contact-side__links">
          <a href="mailto:pbakjejian@hotmail.com" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/icons/email-icon.svg" alt="">
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/puzant-b-006426108/" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/icons/linkedin-logo.svg" alt="">
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/puzant" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/icons/github-logo.svg" alt="">
            <span>GitHub</span>
          </a>
          <a href="https://x.com/puzantBakjejian" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/icons/x-logo.svg" alt="">
            <span>X</span>
          </a>
        </div>
      </aside>
    </div>
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
      hasSubmitted: false,
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      },
      errors: {
        firstName: { message: '', invalid: true },
        lastName: { message: '', invalid: true },
        email: { message: '', invalid: true },
        message: { message: '', invalid: true },
      },
      isClearingForm: false,
      statusMessage: ''
    }
  },
  watch: {
    'formData.firstName'() {
      if (this.hasSubmitted && !this.isClearingForm) this.validateFirstName()
    },
    'formData.lastName'() {
      if (this.hasSubmitted && !this.isClearingForm) this.validateLastName()
    },
    'formData.email'() {
      if (this.hasSubmitted && !this.isClearingForm) this.validateEmeail()
    },
    'formData.message'() {
      if (this.hasSubmitted && !this.isClearingForm) this.validateMessage()
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
    validateFirstName() {
      if (!this.formData.firstName || this.formData.firstName.trim() === '') {
        this.errors.firstName.message = 'First name is required'
        this.errors.firstName.invalid = true
      } else {
        this.errors.firstName.message = ''
        this.errors.firstName.invalid = false
      }
    },
    validateLastName() {
      if (!this.formData.lastName || this.formData.lastName.trim() === '') {
        this.errors.lastName.message = 'Last name is required'
        this.errors.lastName.invalid = true
      } else {
        this.errors.lastName.message = ''
        this.errors.lastName.invalid = false
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
      this.hasSubmitted = true
      this.contactStatusMessage = ''

      this.validateFirstName()
      this.validateLastName()
      this.validateEmeail()
      this.validateMessage()

      if (!this.isFormValid) {
        this.contactStatusMessage = 'Please fix the highlighted fields and try again.'
        return
      }

      this.isSending = true

      emailjs.send(
        process.env.VUE_APP_SERVICE_ID,
        process.env.VUE_APP_TEMPLATE_ID,
        {
          name: `${this.formData.firstName} ${this.formData.lastName}`.trim(),
          firstname: this.formData.firstName,
          lastname: this.formData.lastName,
          email: this.formData.email,
          message: this.formData.message
        },
        process.env.VUE_APP_PUBLIC_ID,
      ).then(res => {
        console.log("You have successfully submitted your message", res.text)
        this.contactStatusMessage = 'Thanks for reaching out! your message was sent and I will get back to you soon. 📩'
      },
        (err) => {
          console.log("This form failed to submit, please kindly check your internet connection", err)
          this.contactStatusMessage = 'Something went wrong. Please try again in a moment.'
        })
      .finally(() => {
        this.isClearingForm = true
        this.isSending = false

        this.formData.firstName = ''
        this.formData.lastName = ''
        this.formData.email = ''
        this.formData.message = ''
        this.resetErrors()
        this.hasSubmitted = false

        this.$nextTick(() => {
          this.isClearingForm = false
        });
      })
    },
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';

.contact-form {
  opacity: 0;
  .title {
    @include sectionTitle;
  }

  .contact-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    margin: 10px 0;

    @media (min-width: 768px) {
      margin: 50px 0;
    }

    @media (min-width: 1024px) {
      grid-template-columns: minmax(0, 1fr) 320px;
      gap: 32px;
      align-items: stretch;
    }
  }

  .contact-side {
    background-color: $secondaryBackgroundColor;
    border: 1px solid $secondaryColor;
    border-radius: 16px;
    padding: 24px;

    &__eyebrow {
      color: $orange;
      font-size: 12px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 10px;
    }

    &__title {
      color: $white;
      font-size: 24px;
      line-height: 1.2;
      margin-bottom: 12px;
    }

    &__text {
      color: $primaryColor;
      font-size: 14px;
      line-height: 1.7;
      margin-bottom: 20px;
    }

    &__links {
      display: flex;
      flex-direction: column;
      gap: 10px;

      a {
        display: flex;
        align-items: center;
        gap: 10px;
        color: $white;
        text-decoration: none;
        padding: 10px 12px;
        border-radius: 10px;
        border: 1px solid $secondaryColor;
        transition: border-color 0.2s ease, transform 0.2s ease;

        &:hover {
          border-color: $orange;
          transform: translateY(-1px);
        }

        img {
          width: 18px;
          height: 18px;
        }

        span {
          font-size: 14px;
        }
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    background-color: $secondaryBackgroundColor;
    border: 1px solid $secondaryColor;
    border-radius: 16px;
    padding: 24px;

    .error {
      color: $error;
      font-size: 0.875rem;
      margin-top: 0.25rem;
      margin-bottom: 12px;
      display: block;
    }
    
    .container {
      display: flex;
      flex-direction: column;
      gap: 10px; 

      @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
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

    .field {
      display: flex;
      flex-direction: column;
      margin: 20px 0;
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

    .subject {
      display: flex;
      flex-direction: column;
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
      margin-top: 20px;

      @media (min-width: 768px) {
        margin-top: auto;
      }

      &:disabled {
        opacity: .6;
        cursor: default;
      }

      img {
        transition: transform 0.3s;
      }

      .loading-indicator {
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