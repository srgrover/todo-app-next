import prisma from "@/app/lib/prisma";
import { TodoGrid } from '../../../todos/components/TodoGrid';


export const metadata = {
 title: 'Listado de Todos',
 description: 'Listado de Todos',
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' }}); 
  return (
    <div>
      <TodoGrid todos={todos} />
    </div>
  );
}