//"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"

type TodoInputProps = {
    onAdd: (title: string) => void;
}

export function TodoInput({ onAdd }: TodoInputProps) {
    const [inputValue, setInputValue] = useState("");

    function handleAdd() {
        if (inputValue.trim() === "") return;
        onAdd(inputValue);
        setInputValue("");
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }


    return (
        <div className="flex gap-2 items-center my-2">
            <Input
                type="text" value={inputValue}
                onChange={handleChange}
                onKeyDown={e => (e.key === "Enter") && handleAdd()}
                placeholder="Thêm công việc của bạn" />
            <Button onClick={handleAdd}>Thêm</Button>
        </div>
    )
}