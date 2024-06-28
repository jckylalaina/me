export const dynamic = 'force-dynamic'; // defaults to auto
import schema from "@/app/components/feat-contact/form.schema";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();

    try {
        await schema.validate(body, { abortEarly: false });

        // Create a transporter object using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        let message = '';
        Object.entries(body).forEach(([key, value]) => {
            message += `${key} => ${value}\n`;
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'radolalainajacky@gmail.com',
            subject: '👋 Hello from your portfolio website 🚀',
            text: message,
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        await Promise.resolve((resolve:any) => setTimeout(() => {resolve(true)},2000))
        return NextResponse.json(
            {
                success: true,
                message: 'Your message has been sent',
                email: body?.email
            },
            {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                },
            }
        );
    } catch (err: any) {
        // If validation fails or any error occurs, return a 400 error with the validation errors
        return new Response(
            JSON.stringify({
                success: false,
                message: err.message,
            }),
            {
                status: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                },
            }
        );
    }
}
