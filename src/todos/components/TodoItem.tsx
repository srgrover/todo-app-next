import { Todo } from "@prisma/client";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  return (
    <div className={`rounded-lg shadow-sm p-5 border-dashed border flex 
      flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 
      ${
        todo.complete
        ? 'line-through bg-blue-50 border-blue-500'
        : 'bg-red-50 border-red-500'
      }`}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div className={`flex p-2 rounded-md cursor-pointer 
          hover:bg-opacity-60 bg-blue-100 border-b-gray-600
          ${ todo.complete ? 'tebgxt-blue-100' : 'bg-red-100' }
        `}>
            {
              todo.complete ?
              <IoCheckboxOutline size={30} /> :
              <IoSquareOutline size={30} />
            }
        </div>
        <div className="text-center sm:text-left">
          { todo.description }
        </div>
      </div>
    </div>
  )
}
