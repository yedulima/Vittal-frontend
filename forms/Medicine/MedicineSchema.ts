import { isBefore, isEqual, parse } from 'date-fns';
import { z } from 'zod';

export const datePeriodObject = z.object({
	start: z.string(),
	end: z.string(),
});

export const medicineSchema = z
	.object({
		name: z.string({ required_error: 'Campo obrigatório' }).nonempty('Campo obrigatório'),
		description: z.string({ required_error: 'Campo obrigatório' }).nonempty('Campo obrigatório'),
		schedules: z
			.array(z.string(), { required_error: 'Insira horários válidos' })
			.nonempty('Insira horários válidos'),
		instructions: z.string({ required_error: 'Campo obrigatório' }).nonempty('Campo obrigatório'),
		datePeriod: datePeriodObject.optional(),
		dosage: z.string({ required_error: 'Campo obrigatório' }).nonempty('Campo obrigatório'),
		isContinuos: z.boolean().optional(),
		newScheduleInput: z.string().optional(),
	})
	.superRefine((data, ctx) => {
		const { datePeriod, isContinuos } = data;

		if (isContinuos) {
			return true;
		}

		if (!datePeriod?.start) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'A data de início é obrigatória para uso não contínuo',
				path: ['datePeriod', 'start'],
			});
			return false;
		}

		if (!datePeriod?.end) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'A data de fim é obrigatória para uso não contínuo',
				path: ['datePeriod', 'end'],
			});
			return false;
		}

		const startDate = parse(datePeriod.start, 'dd/MM/yyyy', new Date());
		const endDate = parse(datePeriod.end, 'dd/MM/yyyy', new Date());

		if (!isBefore(startDate, endDate) && !isEqual(startDate, endDate)) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'A data de fim não pode ser antes da data de início.',
				path: ['datePeriod', 'end'],
			});
		}

		return true;
	});

export type MedicineSchema = z.infer<typeof medicineSchema>;
