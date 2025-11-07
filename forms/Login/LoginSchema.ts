import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string({ required_error: 'Campo obrigatório' }).nonempty('Campo obrigatório').email('Email inválido.'),
	password: z.string({ required_error: 'Campo obrigatório' }).nonempty('Campo obrigatório'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
