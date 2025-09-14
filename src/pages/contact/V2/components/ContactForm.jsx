import TextAreaFormInput from '@/components/form/TextAreaFormInput'
import TextFormInput from '@/components/form/TextFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'
const ContactForm = () => {
  const contactFormSchema = yup.object({
    name: yup.string().required('please enter your name'),
    email: yup.string().email('please enter valid email').required('please enter your email'),
    phoneNo: yup.number().required('please enter your phone no'),
    company: yup.string().required('please enter company name'),
    message: yup.string().required('please enter your message'),
  })
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNo: '',
      company: '',
      message: '',
    },
  })

  const onSubmit = (data) => {
    console.log(data)
    fetch('http://mdht.local:3000/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        toast.success('Your message was sent successfully')
        reset()
      } else {
        toast.error('There was a problem, Try Again Later')
      }
      return response
    })
  }
  return (
    <Row
      as={Form}
      className="g-4"
      onSubmit={handleSubmit((data) => {
        onSubmit(data)
      })}>
      <TextFormInput
        name="name"
        label="Your name *"
        labelClass="heading-color"
        size="lg"
        control={control}
        containerClass="col-md-6"
        placeholder="Full name"
      />
      <TextFormInput
        name="email"
        type="email"
        label="Email address *"
        labelClass="heading-color"
        size="lg"
        control={control}
        containerClass="col-md-6"
        placeholder="name@example.com"
      />
      <TextFormInput
        name="phoneNo"
        label="Phone number *"
        labelClass="heading-color"
        size="lg"
        control={control}
        containerClass="col-md-6"
        placeholder="(xxx) xx xxxx"
      />
      <TextFormInput
        name="company"
        label="Company *"
        labelClass="heading-color"
        size="lg"
        control={control}
        containerClass="col-md-6"
        placeholder="Company name"
      />

      <TextAreaFormInput
        name="message"
        label="Message *"
        labelClass="heading-color"
        control={control}
        containerClass="col-12"
        style={{
          height: 150,
        }}
        placeholder="Write your message here...."
      />

      <button className="btn btn-lg btn-primary mb-0" type="submit">
        Send a message
      </button>
    </Row>
  )
}
export default ContactForm
