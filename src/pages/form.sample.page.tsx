import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { registerSchema } from '../schemas/register.schema';

function FormSamplePage() {
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors, isValid },
		setValue,
		getValues,
		reset,
	} = useForm({
		resolver: yupResolver(registerSchema),
		// bir validasyon kütüphanesi ile entegre ediyoruz
	});

	const onFormSubmit = (data: any) => {
		console.log('formData', data);
	};

	const emailWatch = watch('email');
	console.log('emailWatch', emailWatch);

	return (
		<>
			<form onSubmit={handleSubmit(onFormSubmit)}>
				<input {...register('email')} placeholder="email" />
				{errors.email && <span>{errors.email.message}</span>}
				<br></br>
				<input {...register('password')} placeholder="pass" />
				{errors.password && <span>{errors.password.message}</span>}
				<br></br>
				<input {...register('confirmPassword')} placeholder="confirm" />
				{errors.confirmPassword && (
					<span>{errors.confirmPassword.message}</span>
				)}
				<br></br>
				<input {...register('phone')} placeholder="phone" />
				{errors.phone && <span>{errors.phone.message}</span>}
				<br></br>
				<input {...register('address.city')} placeholder="city" />
				<br></br>
				<input {...register('address.country')} placeholder="country" />
				<br></br>
				<input
					type="number"
					defaultValue={'0000'}
					{...register('address.zipcode')}
					placeholder="zipcode"
				/>
				{errors.address?.zipcode && (
					<span>{errors.address?.zipcode.message}</span>
				)}
				<br></br>
				<input type="submit" value="Send" />
				<button disabled={!isValid} onClick={() => reset()}>
					Reset
				</button>
			</form>
		</>
	);
}

export default FormSamplePage;
