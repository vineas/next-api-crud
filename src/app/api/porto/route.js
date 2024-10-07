import { NextResponse } from "next/server";

import prisma from "../../../../prisma/client";


export async function GET() {
    const portof = await prisma.porto.findMany();
    return NextResponse.json (
        {
            succes: true,
            message: "List Data porto",
            data: portof
        },
        {
            status: 200,
        }
    );
}


export async function POST(request) {
    const {title, link} = await request.json();

    const portof = await prisma.porto.create({
        data: {
            title: title,
            link: link,
        },
    });

    return NextResponse.json(
        {
            succes: true,
            message: "Porto Created",
            data: portof
        },
        {
            status: 201
        }
    );
}