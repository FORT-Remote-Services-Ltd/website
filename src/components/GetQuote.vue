<script setup lang="ts">
import {reactive, ref} from 'vue'
import emailJs from 'emailjs-com';
// import Toast from "./Toast.vue";
import {countries} from "../library/country-list.js";
import {
  NFormItem, NSpace, NInput, NButton,
  NSelect, NCascader, NConfigProvider} from 'naive-ui'

const Mailer = emailJs
Mailer.init("454WVnzKaYzokYZ3g");

const budget_options = [
  {
    disabled: false,
    label:"$1,000 - $5,000",
    value:"$1,000 - $5,000",
  },
  {
    disabled: false,
    label:"$5,000 - $10,000",
    value:"$10,000 - $20,000",
  },
  {
    disabled: false,
    label:"$20,000 - $30,000",
    value:"$30,000 - $40,000",
  },
  {
    disabled: false,
    label:"$40,000 - $50,000",
    value:"$40,000 - $50,000",
  },
  {
    disabled: false,
    label:"$50,000 and above",
    value:"$50,000 and above",
  },

]
const retainer_options = [
  {
    disabled: false,
    label:"Long-term project (Over 6 months commitment)",
    value:"Long-term project",
  },
  {
    disabled: false,
    label:"Contract (Between 4 and 24 weeks)",
    value:"Contract",
  },
  {
    disabled: false,
    label:"Short-term task (Less than 4 weeks)",
    value:"Short-term task",
  },
]
const options = ref([
  {
    disabled: false,
    label:"Bookkeeping Services",
    value:"bookkeeping",
    children: [
        {
          disabled: false,
          label:"Online Accounting Software Setup",
          value:"Online Accounting Software Setup",
        },
        {
          disabled: false,
          label:"Data Entry and Transaction Recording",
          value:"Data Entry and Transaction Recording",
        },
        {
          disabled: false,
          label:"Bank Reconciliation",
          value:"Bank Reconciliation",
        },
        {
          disabled: false,
          label:"Expense Tracking",
          value:"Expense Tracking",
        },
        {
          disabled: false,
          label:"Accounts Payable (AP) and Accounts Receivable (AR) Management",
          value:"Accounts Payable (AP) and Accounts Receivable (AR) Management",
        },
        {
          disabled: false,
          label:"Financial Reporting",
          value:"Financial Reporting",
        },
        {
          disabled: false,
          label:"Budgeting and Forecasting",
          value:"Budgeting and Forecasting",
        },
        {
          disabled: false,
          label:"Audit Support",
          value:"Audit Support",
        },
        {
          disabled: false,
          label:"Financial Analysis and Advisory",
          value:"Financial Analysis and Advisory",
        },
        {
          disabled: false,
          label:"Data Security and Compliance",
          value:"Data Security and Compliance",
        },
        {
          disabled: false,
          label:"Virtual CFO Services",
          value:"Virtual CFO Services",
        },
        {
          disabled: false,
          label:"Multi-Currency Accounting",
          value:"Multi-Currency Accounting",
        },
        {
          disabled: false,
          label:"Customized Reporting",
          value:"Customized Reporting",
        },
      ]
  },
  {
      disabled: false,
      label:"Data Entry Services",
      value:"data_entry",
      children: [
        {
          disabled: false,
          label:"Real Estate Data Entry",
          value:"Real Estate Data Entry",
        },
        {
          disabled: false,
          label:"Legal Data Entry",
          value:"Legal Data Entry",
        },
        {
          disabled: false,
          label:"Catalog Data Entry",
          value:"Catalog Data Entry",
        },
        {
          disabled: false,
          label:"Surveys and Market Research Data Entry",
          value:"Surveys and Market Research Data Entry",
        },
        {
          disabled: false,
          label:"Inventory Data Entry",
          value:"Inventory Data Entry",
        },
        {
          disabled: false,
          label:"Mailing List/Data Entry for Marketing",
          value:"Mailing List/Data Entry for Marketing",
        },
        {
          disabled: false,
          label:"Handwritten Data Entry",
          value:"Handwritten Data Entry",
        },
      ]
    },

])

// Form
const terms = ref('')
const description = ref('')
const retainer = ref('')
const phone = ref('')
const email = ref('')
const country = ref('')
const service = ref('')
const f_name = ref('')
let sending = ref(false)
// Reset form
const resetForm = () => {
  f_name.value = ''
  terms.value = ''
  description.value = ''
  retainer.value = ''
  phone.value = ''
  email.value = ''
  country.value = ''
  service.value = ''
}

const toast = ref({
  title: '',
  description: '',
  type: '',
  show: false
})

//send meail
/**/const sendMail = () => {
  Mailer.send("service_7jdyxxj", "template_3r16flj",{
    to_name: 'Michael',
    from_name:`${name.value}`,
    phone: phone.value,
    message: message.value,
    email: email.value,
    reply_to: email.value
  }).then((res)=>{
    console.log('Email sent successfully: ', res)
    if (res.text.toLowerCase() === 'ok'){
      toast.value.title = 'Message sent successfully!'
      toast.value.description = 'I\'ll be replying to your message shortly. Thank you for reaching out.'
      toast.value.type = 'success'
      toast.value.show = true

      setTimeout(() => {
        toast.value.show = false
      }, 20000)
    }
  }).catch((error) =>{
    console.log('Email failed: ', error)
    toast.value.title = 'Error!'
    toast.value.description = 'Am sorry! Something went wrong when sending your message. Please try again later'
    toast.value.type = 'danger'
    toast.value.show = true

    setTimeout(() => {
      toast.value.show = false
    }, 20000)
  }).finally(() => {
    sending.value = false
    resetForm()
  });



}

const form = reactive({
  service:null,
  name:'',
  email:'',
  phone:'',
  description:'',
  budget:'',
  retainer_terms:'',
  country:''
})

  const themeOverrides = {
      common: {
        primaryColor: '#008080',
        borderRadius: "4px",
        borderColor: '#000000',
        borderHoverColor: '#344546',
      }
  }
  const country_options = countries.map(country_name => {
    return {label: country_name, value: country_name, disabled: false, sendMail, sending, toast, service, country,terms, description, retainer,phone, email}
  })
// return {sendMail, sending, toast, service, country,terms, description, retainer,phone, email}

</script>

<template>
<form @submit.prevent>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-space vertical>
        <n-form-item label="Full Name">
          <n-input
              :input-props="{required: true}"
              class="!rounded !border-black !hover:border-slate-500"
              v-model="f_name"
              size="large" v-model:value="form.name" type="text" placeholder="Full Name" />
        </n-form-item>
        <n-form-item label="Choose Service">
          <n-cascader
            :input-props="{required: true}"
            v-model="service"
            size="large" v-model:value="form.service"
            placeholder="Meaningless values"
            :options="options"
            check-strategy="child"
          />
        </n-form-item>

        <n-form-item label="Email">
          <n-input :input-props="{required: true}" v-model="email" size="large" v-model:value="form.email" type="text" placeholder="Email" />
        </n-form-item>

        <n-form-item label="Phone Number">
          <n-input :input-props="{required: true}" size="large" v-model="phone" v-model:value="form.phone" type="text" placeholder="e.g +1 26x-xxx-xxxx" />
        </n-form-item>
        <n-form-item label="Your Country">
          <n-select
              filterable
              placeholder="Select country"


              v-model:value="form.country"
              v-model="country"
              :options="country_options" />
        </n-form-item>

        <n-form-item label="Your Budget">
          <n-select :input-props="{required: true}"
                    v-model="terms" placeholder="Your Budget" v-model:value="form.budget" :options="budget_options" />
        </n-form-item>

        <n-form-item label="Retainer Terms">

          <n-select :input-props="{required: true}" v-model="retainer" v-model:value="form.retainer_terms" :options="retainer_options" />
        </n-form-item>

       <n-form-item label="Description">
        <n-input :input-props="{required: true}"    v-model="description"
          size="large" v-model:value="form.description"
          type="textarea"
          placeholder="Describe your project..."

        />
      </n-form-item>
    </n-space>


    <n-space justify="end">
      <n-button attr-type="reset">Cancel</n-button>
      <n-button type="primary" color="#008080"
                style="background-color: #008080" attr-type="submit">Submit</n-button>
    </n-space>
  </n-config-provider>
</form>
</template>

<style scoped>

</style>