import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

type TodoItemProps = {
    id: string;
    title: string;
    isDone: boolean;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newTitle: string) => void;
}


export function TodoItem(
    {
        id,
        title,
        isDone,
        onToggle,
        onDelete,
        onEdit
    }: TodoItemProps) {
    const [isEditing, setIsEditing] = useState(false)
    const [editValue, setEditValue] = useState(title)


    return (
        <div className="border-1 my-2 rounded-sm">{(!isEditing) ? (
            <div className="flex gap-2 items-center m-1">
                <span
                    className="flex-1 text-l mx-3"
                    style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
                    {title}
                </span>
                <Checkbox
                    className="size-6 border-3 p-3"
                    checked={isDone}
                    onCheckedChange={() => onToggle(id)} />
                <Button
                    className="size-8 bg-yellow-500"
                    onClick={() => setIsEditing(true)}>
                    ✏️
                </Button>
                <Button
                    className="bg-red-900"
                    onClick={() => onDelete(id)}>
                    🗑
                </Button>
            </div>) : (
            <div className="flex gap-2 items-center m-1">
                <Input
                    type="text"
                    value={editValue}
                    onChange={e => setEditValue(e.target.value)} />
                <Button
                    className="bg-green-600"
                    onClick={() => {
                        onEdit(id, editValue);
                        setIsEditing(false);
                    }}>
                    Oke
                </Button>
                <Button
                    className="bg-red-500"
                    onClick={() => {
                        setEditValue(title);
                        setIsEditing(false)
                    }}>X</Button>
            </div>
        )}
        </div>);
}