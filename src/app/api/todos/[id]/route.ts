import prisma from '@/app/lib/prisma'
import { Todo } from '@prisma/client'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup'

interface Segment {
  params: {
    id: string
  }
}

const getTodo = async (id : string): Promise<Todo | null> => {
  const todo = await prisma.todo.findFirst({where: { id: id }});
  return todo;
}

export async function GET(request: Request, { params }: Segment) { 
  const todo = await getTodo(params.id);

  if( !todo ) return NextResponse.json({ message: `Todo con id ${params.id} no encontrado o no existe` }, { status: 404});

  return NextResponse.json(todo)
}

//? Validador para las propiedades que vienen del body
const putSchema = yup.object({  
  complete: yup.boolean().optional(), 
  description: yup.string().optional(),
});

export async function PUT(request: Request, { params }: Segment) { 
  const { id } = params;
  const todo = await getTodo(id);

  try {
    if( !todo ) return NextResponse.json({ message: `Todo con id ${id} no encontrado o no existe` }, { status: 404});
    
    const { complete, description } = await putSchema.validate(await request.json());
  
    const updatedTodo = await prisma.todo.update({
      where: { id: id },
      data: { complete, description } //? Si la propiedad es null, no la actualiza
    });
  
    return NextResponse.json(updatedTodo)
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}