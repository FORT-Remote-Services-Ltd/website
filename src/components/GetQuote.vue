<script setup lang="ts">
import {reactive, ref} from 'vue'
import emailJs from '@emailjs/browser';
// import Toast from "./Toast.vue";
import {countries} from "../library/country-list.js";
import {
  NFormItem, NSpace, NInput, NButton,
  NSelect, NCascader, NConfigProvider} from 'naive-ui'
import Toast from "@components/Toast.vue";


const Mailer = emailJs
Mailer.init("sXiaqRd5-KvJJl90G");

const budget_options = [
  {
    disabled: false,
    label:"$100 - $300",
    value:"$100 - $300",
  },
  {
    disabled: false,
    label:"$301 - $500",
    value:"$301 - $500",
  },
  {
    disabled: false,
    label:"$501 - $1,000",
    value:"$501 - $1,000",
  },
  {
    disabled: false,
    label:"$1,001 - $3,000",
    value:"$1,001 - $3,000",
  },
  {
    disabled: false,
    label:"$3,001 - $5,000",
    value:"$3,001 - $5,000",
  },

  {
    disabled: false,
    label:"$5,001 - $10,000",
    value:"$5,001 - $10,000",
  },
  {
    disabled: false,
    label:"Over $10,000",
    value:"Over $10,000",
  },

]
const retainer_options = [
    {
      disabled: false,
      label:"Short-term task (Less than 4 weeks)",
      value:"Short-term task",
    },
    {
      disabled: false,
      label:"Contract (Between 4 and 24 weeks)",
      value:"Contract",
    },
    {
      disabled: false,
      label:"Long-term project (Over 6 months commitment)",
      value:"Long-term project",
    }
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

let sending = ref(false)
let sending_result = ref({
  type:'success',
  message:'',
  showing: false
})

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


const resetForm = () => {
  for (let i = 0; i < Object.keys(form).length; i++) {
    if (form[Object.keys(form)[i]] === 'service'){
      form[Object.keys(form)[i]] = null
    }else{
      form[Object.keys(form)[i]] = ''
    }
  }
}

//send meail
  const sendMail = () => {
    sending.value = true
    setTimeout(() => {
      resetForm()


      sending.value = false
    }, 3000)

    //formulate the email body
    //send

    Mailer.send("service_uuvhzii", "template_fort_quote",{
      to_name: 'Sales agent',
      from_name: form.name,
      phone: form.phone,
      budget: form.budget,
      service: form.phone,
      retainer_terms: form.retainer_terms,
      country: form.country,
      description: form.description,
      email: form.email,
      reply_to: form.email
    }).then((res)=>{
      console.log('Email sent successfully: ', res)
      if (res.text.toLowerCase() === 'ok'){
        sending_result.value.message = 'Your request has been submitted successfully, we shall be in touch with you soon'
        sending_result.value.type = 'success'
        sending_result.value.showing = true

      }
    })
        .catch((error) =>{
      console.log('Email failed: ', error)
          sending_result.value.message = 'Am sorry! Something went wrong when sending your message. Please try again later'
        sending_result.value.type = 'danger'
        sending_result.value.showing = true

    }).finally(() => {
      sending.value = false
      resetForm()
      setTimeout(() => {
          sending_result.value.showing  = false
        }, 20000)
    });

  }


  const themeOverrides = {
      common: {
        primaryColor: '#008080',
        borderRadius: "4px",
        borderColor: '#000000',
        borderHoverColor: '#344546',
      }
  }
  const country_options = countries.map(country_name => {
    return {label: country_name, value: country_name, disabled: false}
  })

</script>

<template>
  <Toast v-if="sending_result.showing && sending_result.message.length > 0" :title="sending_result.message" :theme="sending_result.type" />
  <form @submit.prevent="sendMail">
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
        <n-button :disabled="sending" attr-type="reset">Cancel</n-button>
        <n-button :disabled="sending" :loading="sending" type="primary" color="#008080"
                  style="background-color: #008080" attr-type="submit">Submit</n-button>
      </n-space>
    </n-config-provider>
  </form>
</template>

<style scoped>

</style>