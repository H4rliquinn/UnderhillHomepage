import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'

const CSS = {
  label: 'block mt-6 text-gray-700 font-semibold',
  labelError: 'block mt-6 font-semibold text-red-700',
  input:
    'block mt-2 w-full p-2 border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-gray-500',
  inputError:
    'block mt-2 w-full p-2 border border-red-700 text-red-900 rounded focus:outline-none',
  errorMessage: 'block mt-1 font-semibold uppercase text-xs text-red-700',
}

const RabbitForm = (props) => {
  const onSubmit = (data) => {
    console.log('RABBIT FORM', data)
    data.price = parseFloat(data.price)
    props.onSave(data, props?.rabbit?.id)
  }

  return (
    <div className="text-sm -mt-4">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="p-4 bg-red-100 text-red-700 border border-red-300 rounded mb-4"
          titleClassName="font-semibold"
          listClassName="mt-2 list-disc list-inside"
        />

        <Label
          name="eartag"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="eartag"
          defaultValue={props.rabbit?.eartag}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="eartag" className={CSS.errorMessage} />

        <Label
          name="name"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="name"
          defaultValue={props.rabbit?.name}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="name" className={CSS.errorMessage} />

        <Label
          name="color"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="color"
          defaultValue={props.rabbit?.color}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="color" className={CSS.errorMessage} />

        <Label
          name="parents"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="parents"
          defaultValue={props.rabbit?.parents}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="parents" className={CSS.errorMessage} />

        <Label
          name="status"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="status"
          defaultValue={props.rabbit?.status}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="status" className={CSS.errorMessage} />

        <Label
          name="price"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="price"
          defaultValue={props.rabbit?.price}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="price" className={CSS.errorMessage} />

        <Label
          name="picture"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="picture"
          defaultValue={props.rabbit?.picture}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="picture" className={CSS.errorMessage} />

        <div className="mt-8 text-center">
          <Submit
            disabled={props.loading}
            className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RabbitForm
