// Imports
import React from "react";

import { useForm } from "react-hook-form";

const NewTask = ({ setTarea,tarea }) => {
  // Estados
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  // Lógica funcional
  const onSubmit = (data) => {
    setTarea(tarea=>[...tarea,`${data.nombreTarea}`]);
  }
  const validacion = watch("nombreTarea");

  // Pintamos
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombra la tarea</label>
        <br />
        <input
          {...register("nombreTarea", {
            required: true,
            maxLength: 25,
          })}
        />
        {errors.nombreTarea?.type === "required" && (
          <p style={{ color: "red" }}>Campo obligatorio</p>
        )}
        {errors.nombreTarea?.type === "maxLength" && (
          <p style={{ color: "red" }}>Nombre demasiado largo</p>
        )}
        <br />
        <input type="submit" value="📤" disabled={!validacion} />
      </form>
    </div>
  );
};

export default NewTask;
