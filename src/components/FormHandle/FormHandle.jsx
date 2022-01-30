import { useContext } from "react";
import { useForm } from "react-hook-form";
const FormHandle = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const divStyle = {
        margin: 4,
    }
    const onSubmitForm = data => console.log(data);
    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <div style={{ ...divStyle }}>
                        <input type="text" placeholder="firstName" {...register("firstName")} />
                    </div>
                    <div style={{ ...divStyle }}>
                        <input type="text" placeholder="lastName" {...register("lastName")} />
                    </div>
                    <div style={{ ...divStyle }}>
                        <input type="email" placeholder="email" {...register("email")} />
                    </div>
                    <div>
                        <input type="password" placeholder="password" {...register("password")} />
                    </div>
                    <div style={{ ...divStyle }}>
                        <button style={{ ...divStyle }}>Cancel</button>
                        <button type="submit" style={{ ...divStyle }}>Submit</button>
                    </div>
                </form>
            </div>

        </>
    );
};

export default FormHandle;
