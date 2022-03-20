import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from "@mui/lab/DatePicker";

const FormHandle = ({ children }) => {
    const schema = yup.object({
        firstName: yup.string().required('First name is required.'),
        lastName: yup.string().required('Last name is required.'),
        dateOfBirth: yup.date().required('Date of birth is required.').nullable().default(undefined),
    }).required();
    const { register, control, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
        }
    });
    const onSubmitForm = data => console.log(data);
    const [value, setValue] = useState(null);
    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmitForm)}>

                    <Controller
                        name="firstName"
                        control={control}
                        rules={{
                            required: true,

                        }}
                        render={({ field }) =>
                            <TextField
                                helperText={errors.firstName?.message}
                                error={!!errors.firstName}
                                placeholder="First Name"
                                {...field}
                            />
                        }
                    />
                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => <TextField helperText={errors.lastName?.message}
                            error={!!errors.lastName} placeholder="Last Name" {...field} />}
                    />
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <TextField placeholder="Email" {...field} />}
                    />
                    <Controller
                        name="dateOfBirth"
                        control={control}
                        render={({ field }) =>
                            <TextField
                                error={!!errors.dateOfBirth}
                                helperText={errors.dateOfBirth?.message}
                                type='date'
                                {...field}
                            />}
                    />
                    <Button variant="contained" type="submit">
                        Submit
                    </Button>
                </form>
            </div>

        </>
    );
};

export default FormHandle;
