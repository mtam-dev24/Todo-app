//"use client";
import { TodoItem } from './TodoItem';
import type { Todo } from './TodoType';
import { useState } from 'react'
import { Button } from './ui/button';

type TodoListProps = {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newTitle: string) => void;
}

type FilterType = "all" | "done" | "todo";

export function TodoList({ todos, onToggle, onDelete, onEdit }: TodoListProps) {
    const [filter, setFilter] = useState<FilterType>("all");
    const filteredTodos = todos
        .filter(todo => !todo.isDeleted)
        .filter(todo => {
            if (filter === "done") return todo.isDone;
            if (filter === "todo") return !todo.isDone
            return true
        })
    return (
        <div>
            <div className="flex my-2">
                <Button
                    onClick={() => setFilter("all")}
                    className="flex-1 bg-blue-600">
                    All
                </Button>
                <Button
                    onClick={() => setFilter("done")}
                    className="flex-1 bg-blue-600">
                    Done
                </Button>
                <Button
                    onClick={() => setFilter("todo")}
                    className="flex-1 bg-blue-600">
                    Todo
                </Button>
            </div>
            <div>
                {filteredTodos.filter(todo => !todo.isDeleted).map(todo => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        isDone={todo.isDone}
                        onToggle={onToggle}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
            </div>
        </div>
    );
}