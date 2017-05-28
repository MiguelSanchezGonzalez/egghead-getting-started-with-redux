
export interface Todo {
    id: number;
    text: string;
    completed?: boolean;
}


export const initTodo = ( todo: Todo ) => ( {
    completed: false,
    ...todo
} );


export const toggleTodo = ( todo: Todo ): Todo => ( {
    ...todo,
    completed: !todo.completed
} );
