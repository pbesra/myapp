import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from "@mui/lab/DatePicker";
import BasicInput from "../BasicInput/BasicInput";

const FormHandle = ({ children }) => {
    const schema = yup.object({
        firstName: yup.string().required('First name is required.'),
        lastName: yup.string().required('Last name is required.'),
    });
    const { control, handleSubmit



        , formState: { errors } } = useForm({
            resolver: yupResolver(schema),
            defaultValues: {
                firstName: '',
                lastName: '',
                email: '',
            }
        });
    const onSubmitForm = data => console.log(data);
    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmitForm)}>

                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) =>
                            <BasicInput
                                helperText={errors.firstName?.message}
                                error={!!errors.firstName}
                                field={field}
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

                    <Button variant="contained" type="submit">
                        Submit
                    </Button>
                </form>
            </div>

        </>
    );
};

export default FormHandle;
