import prisma from '@/lib/db';
// import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req) {
	// check for  user who is eligible to create product from request header.  Can be done in a middleware also.
	// const token = headers().get('token');
	// create a method to verify token and retrieve user id and ck from db if the user exists and then check if user is eligible to create product
	// if (!user.id) {
	// 	return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	// }
	try {
		// extract fields from request
		const { name, description, imageUrl, price } = await req.json();
		// create product in db
		const product = await prisma.product.create({
			data: {
				name,
				description,
				imageUrl,
				price
			}
		});
		// return response
		return NextResponse.json(
			{ success: true, message: 'Product created successfully', data: product },
			{ status: 201 }
		);
	} catch (error) {
		// handle error
		console.log(error);
		return NextResponse.json(
			{ success: false, message: 'Internal server error', data: null },
			{ status: 500 }
		);
	}
}
