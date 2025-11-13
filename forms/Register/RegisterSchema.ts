import { checkValidDate } from '@/utils/checkValidDate';
import { z } from 'zod';

export const registerSchema = z
	.object({
		name: z
			.string({ required_error: 'Campo obrigatório' })
			.nonempty('Campo obrigatório')
			.min(5, 'Insira um nome válido')
			.refine((value) => value.trim().split(/\s+/).length >= 2, 'Insira um nome válido'),
		email: z.string({ required_error: 'Campo obrigatório' }).nonempty('Campo obrigatório').email('Email inválido'),
		password: z.string({ required_error: 'Campo obrigatório' }).nonempty('Campo obrigatório'),
		confirmPassword: z.string({ required_error: 'Campo obrigatório' }).nonempty('Campo obrigatório'),
		profilePhoto: z.string().optional(),
		birtdayDate: z
			.string({ required_error: 'Insira sua data de nascimento' })
			.refine((v) => checkValidDate(v), 'Data de nascimento inválida'),
		role: z.enum(['idoso', 'cuidador']).or(z.literal('')),
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		message: 'As senhas não coindicem',
		path: ['confirmPassword'],
	});

export type RegisterSchema = z.infer<typeof registerSchema>;
