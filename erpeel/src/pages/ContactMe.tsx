import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
let renderCount = 0;

export default function ReactHookFormAdvanced() {
  const {
    register,
    handleSubmit,
    formState: {
      touchedFields,
      isDirty,
      isValid,
      dirtyFields,
      isSubmitted,
      errors,
    },
    watch,
    trigger
  } = useForm();


  const handleValidate = async () => {
    const isValid = await trigger();
    console.log("Form is valid:", isValid);
  };

  const onSubmit = (data) => {
    setData(data);
    console.log(data);
    console.log(errors);
  };

  const [data, setData] = useState(null);
  const watchSendEmail = watch("sendEmail");
  renderCount += 1;
  
  return (
    <div className="w-full flex justify-center items-center bg-gray-500 p-8">
      <div
        className="w-1/2 shadow-lg rounded-md bg-white p-8 flex flex-col justify-start"
        style={{ height: "700px" }}
      >
        <h2 className="text-center font-medium text-2xl mb-4">
          React Hook Form
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-1 flex-col justify-evenly'
        >
          <input
            className="border-2 outline-none p-2 my-2 rounded-md"
            placeholder="Name"
            {...register("name", {
              required: { value: true, message: "Name is required" },
              minLength: {
                value: 4,
                message: "Name must be at least 4 characters long",
              },
            })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message as ReactNode}</p>}

          <input
            className="border-2 outline-none p-2 my-2 rounded-md"
            placeholder="Email"
            {...register("email", {
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Not a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message as ReactNode}</p>
          )}

          <input
            className="border-2 outline-none p-2 my-2 rounded-md"
            placeholder="Phone Number"
            {...register("phoneNumber", {
              
              required: {value:true, message: 'Phone Number is required'},
              minLength: {value: 10, message:'Too Short!'},
              maxLength: {value: 14, message: 'Too Long!'},
            })}
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber.message as ReactNode}</p>
          )}
          <div>
            <span className="mr-4">Send email ?</span>
            <input type="checkbox" {...register("sendEmail")} />
          </div>
          {watchSendEmail ? (
            <div className="flex flex-1 flex-col w-full ">
              <input
                className="border-2 outline-none p-2 rounded-md my-2"
                placeholder="Subject"
                {...register("subject", { required: "Subject is required" })}
              />
              <textarea
                className="border-2 outline-none p-2 rounded-md my-2"
                placeholder="Message"
                {...register("message", { required: "Message is required" })}
              />
            </div>
          ) : null}

          <button
            className=" flex justify-center p-2 rounded-md
    w-1/2 self-center bg-gray-900  text-white hover:bg-gray-800"
            type="submit"
          >
            <span>Submit</span>
          </button>
          </form>
          
          <p>is this beside the form?</p>



        Render Count -- {renderCount}
        <p className="w-4/5">
          {" "}
          <strong> Data: </strong> {JSON.stringify(data)}{" "}
        </p>
        <p>
          {" "}
          <strong> Is Valid: </strong> {JSON.stringify(isValid)}
        </p>
        <p>
          {" "}
          <strong> Is Dirty : </strong> {JSON.stringify(isDirty)}{" "}
        </p>
        <p>
          {" "}
          <strong> Is Submited: </strong> {JSON.stringify(isSubmitted)}
        </p>
        <p>
          {" "}
          <strong> Errors: </strong> {JSON.stringify(errors?.email?.message)}
        </p>
        <p>
          {" "}
          <strong> Dirty Fields : </strong> {JSON.stringify(dirtyFields)}{" "}
        </p>
        <p>
          {" "}
          <strong> Touched Fields: </strong> {JSON.stringify(touchedFields)}{" "}
        </p>
        <p>
          {" "}
          <strong> Watching Send Email: </strong>{" "}
          {JSON.stringify(watchSendEmail)}
        </p>
      </div>
    </div>
  );
}
