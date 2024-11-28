import * as yup from 'yup';

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

export const registerSchema = yup
	.object({
		email: yup
			.string()
			.email('E-posta formatında giriniz')
			.required('E-posta alanı boş geçilemez'),
		password: yup
			.string()
			.min(8, 'Min 8 karakter olmalıdır')
			.required('Parola boş geçilemez'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], 'parolalar eşleşmiyor')
			.required('Parola boş geçilemez'),
		phone: yup
			.string()
			.matches(phoneRegex)
			.required('Telefon formatında giriniz'),
		address: yup
			.object({
				// nested form
				city: yup.string().trim().optional(),
				country: yup.string().trim().uppercase().optional(),
				zipcode: yup.number().positive().integer().required(), // 3458
			})
			.required(),
	})
	.required();
