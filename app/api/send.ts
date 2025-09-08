import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function Send(req: NextApiRequest, res: NextApiResponse) {
    'use server'
    console.log('hellow world')

};