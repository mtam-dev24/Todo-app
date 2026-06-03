"use client";
import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { Button } from "@/components/ui/button"
import type { Todo } from "./TodoType";


export function TodoApp() {

    const [todos, setTodos] = useState<Todo[]>([]);

    function addTodo(title: string): void {
        const newTodo: Todo = {
            id: crypto.randomUUID(),
            title,
            isDone: false,
            isDeleted: false,
        }
        setTodos([...todos, newTodo]);
    }

    function toggleTodo(id: string): void {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isDone: !todo.isDone };
            }
            return todo;
        }));
    }

    function deleteTodo(id: string): void {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isDeleted: true };
            }
            return todo;
        }));
    }

    function editTodo(id: string, newTitle: string): void {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, title: newTitle };
            }
            return todo;
        }));
    }

    function deleteAllToDos(): void {
        setTodos([]);
    }

    function deleteDoneTodos(): void {
        setTodos(todos.filter(todo => (!todo.isDone)));
    }

    return (
        <div className="m-5 p-5">
            <h1 className="text-center text-xl font-bold m-2">TODO APP</h1>
            <TodoInput onAdd={addTodo} />
            <TodoList
                todos={todos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo} />
            <div className="flex my-2">
                <Button
                    onClick={deleteAllToDos}
                    className="flex-1 bg-red-600">
                    Delete All Todos
                </Button>
                <Button
                    onClick={deleteDoneTodos}
                    className="flex-1 bg-red-600 ml-2">
                    Delete Done Todos
                </Button>
            </div>
        </div>
    );
}