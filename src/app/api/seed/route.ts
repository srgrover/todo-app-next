import prisma from '@/app/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

  //await prisma.todo.deleteMany({ where: { complete: true } }); //? DELETE FROM todo WHERE complete = true;
  await prisma.todo.deleteMany(); //! DELETE * FROM todo

  await prisma.todo.createMany({
    data: [
      { description: 'Pedra del alma', complete: true },
      { description: 'Piedra del poder', },
      { description: 'Piedra del tiempo', },
      { description: 'Piedra del realidad', },
      { description: 'Piedra del espacio', },
    ],
  })

  return NextResponse.json({
    message: 'Seed executed!',
  })
}