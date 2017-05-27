export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export const toggle = ( todo: Todo ) => ( {
    ...todo,
    completed: !todo.completed
} );
