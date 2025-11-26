import { Feather } from '@expo/vector-icons';
import React from 'react';

export interface UserInterface {
	id: string;
	name: string;
	photo: string;
	status: string;
}

export const USERS = [
	{ id: '1', name: 'Carlos Eduardo Lima de Sousa', photo: '', status: 'Ativo' },
	{ id: '2', name: 'Renata Gonçalves Vasconcelos', photo: '', status: 'Ativo' },
	{ id: '3', name: 'Roberto Carlos', photo: '', status: 'Ativo' },
	{ id: '4', name: 'Ana Clara Ferreira', photo: '', status: 'Ativo' },
	{ id: '5', name: 'Pedro Henrique Santos', photo: '', status: 'Ativo' },
	{ id: '6', name: 'Isabela Costa Oliveira', photo: '', status: 'Ativo' },
];

export const USERS_LENGTH = USERS.length;

export interface NotificationInterface {
	id: string;
	title: string;
	description: string;
	date: string;
	iconName: React.ComponentProps<typeof Feather>['name'];
	status: 'Emergency' | 'Alert' | 'Normal';
}

export const NOTIFICATIONS: NotificationInterface[] = [
	{
		id: '1',
		title: 'Lembrete de Higiene Pessoal',
		description: 'Hora de auxiliar com a higiene pessoal ou banho agendado.',
		date: '14-02-2025-17:59',
		iconName: 'bell',
		status: 'Normal',
	},
	{
		id: '2',
		title: 'Estoque Baixo: Shampoo',
		description: 'O item Shampoo na lista de suprimentos está acabando.',
		date: '27-01-2025-11:47',
		iconName: 'alert-triangle',
		status: 'Alert',
	},
	{
		id: '3',
		title: 'Queda Detectada',
		description: 'O paciente sofreu uma queda. Verifique a localização imediatamente.',
		date: '26-05-2025-08:03',
		iconName: 'alert-circle',
		status: 'Emergency',
	},
	{
		id: '4',
		title: 'Paciente Relata Desconforto',
		description: 'O paciente indicou um nível de dor. Avaliar medicação e conforto.',
		date: '05-03-2025-17:21',
		iconName: 'alert-triangle',
		status: 'Alert',
	},
];

export const NOTIFICATIONS_LENGTH = NOTIFICATIONS.length;
export const EMERGENCYS_NUM = NOTIFICATIONS.filter((item) => item.status === 'Emergency').length;
export const ALERTS_NUM = NOTIFICATIONS.filter((item) => item.status === 'Alert').length;

export interface OverViewInterface {
	id: string;
	name: string;
	count: string;
	iconName: React.ComponentProps<typeof Feather>['name'];
}

export const OVERVIEW: OverViewInterface[] = [
	{
		id: '1',
		name: 'Emergências',
		count: EMERGENCYS_NUM.toString(),
		iconName: 'alert-circle',
	},
	{
		id: '2',
		name: 'Pendentes',
		count: NOTIFICATIONS_LENGTH.toString(),
		iconName: 'clock',
	},
];

export interface MedicinesInterface {
	id: string;
	name: string;
	description: string;
	mlQt: string;
	time: string;
	done: boolean;
}

export const MEDICINES: MedicinesInterface[] = [
	{
		id: '1',
		name: 'Paracetamol',
		description: 'Analgésico e antitérmico para dores e febre.',
		mlQt: '25mg/mL',
		time: '10:30',
		done: false,
	},
	{
		id: '2',
		name: 'Dipirona',
		description: 'Potente analgésico e antipirético, indicado para cólicas.',
		mlQt: '50mg',
		time: '15:25',
		done: false,
	},
	{
		id: '3',
		name: 'Nimesulida',
		description: 'Anti-inflamatório, usado para aliviar dor e inflamação.',
		mlQt: '50mg/mL',
		time: '11:00',
		done: false,
	},
	{
		id: '4',
		name: 'Amoxicilina',
		description: 'Antibiótico de amplo espectro, combate infecções bacterianas.',
		mlQt: '50mg',
		time: '20:30',
		done: true,
	},
];

export const MEDICINES_REMAINING = MEDICINES.filter((item) => item.done === false).length;
