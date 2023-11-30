import React from 'react'
import './contactForm.css';
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <>
      <form 
      onSubmit={handleSubmit(onSubmit)}
      className='contact-form'>
        <div 
        className='grupoInput'>
        <label className='label'>Nombre</label>
        <input
        className='form-input'
          type="text"
          name="nombre"
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            maxLength: 20,
            minLength: 2,
          })}
        />
        {errors.nombre?.type === "required" && <span
        className='span-form'
        >Nombre requerido</span>}
        {errors.nombre?.type === "maxLength" && (
          <span
          className='span-form'
          >Nombre no debe ser mayor a 20 caracteres</span>
        )}
        {errors.nombre?.type === "minLength" && (
          <span
          className='span-form'
          >Nombre debe ser mayor a 2 caracteres</span>
        )}
      </div>
         
      <div
      className='grupoInput'>
        <label className='label'>Apellido</label>
        <input
        className='form-input'
          type="text"
          name="apellido"
          {...register("apellido", {
            required: {
              value: true,
              message: "Apellido es requerido",
            },
            pattern: {
              value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
              message: "Apellido no válido",
            },
            maxLength: 20,
            minLength: 2,
          })}
          
        />
        {errors.apellido?.type === "required" && <span
        className='span-form'
        >Apellido requerido</span>}
        {errors.apellido?.type === "maxLength" && (
          <span
          className='span-form'
          >Apellido no debe ser mayor a 20 caracteres</span>
        )}
        {errors.apellido?.type === "minLength" && (
          <span
          className='span-form'
          >Apellido debe ser mayor a 2 caracteres</span>
        )}
      </div>

          <div 
          className='grupoInput'>
        <label className='label'>Mail</label>
        <input className='form-input'
          type="email"
          name="correo"
          {...register("correo", {
            required: {
              value: true,
              message: "Correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Correo no válido",
            },
          })}
        />
        {errors.correo && <span
        className='span-form'
        >{errors.correo.message}</span>}
      </div>

           <label className='label-options'>Escribe tu mensaje</label>
           <textarea
           className='contact-textarea'
            name="contact"
            rows={8} 
            cols={40} />
        <div className="btn-form-contact">
          <button className="contact-btn" type='submit'>Enviar</button>
        </div>
      </form>
    </>
  )
}

export default ContactForm;