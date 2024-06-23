"use client"

import { ChangeEvent, FormEvent, useState } from "react";

/**
 * @note 웹 애플리케이션에서 폼 입력을 관리하는 것은 흔한 요구 사항이다. 리액트는 이 과정을 제어 컴포넌트로
 *  단순화한다. 제어 컴포넌트에서는 폼 데이터를 컴포넌트의 사앹가 처리한다. 모든 상태 업데이트마다 컴포넌트가 다시 렌더링되어 입력값이 리액트 상태와 항상 동기화 되어 있음을 보장한다<div className=""></div>
 */

export const ControlledInputExample = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [formData, setFormData] = useState({ name: "", email: ""});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    
    const handleFormData = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prevFormData => {
            
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("제출된 이름: " + formData);
    };


    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label className="flex flex-col space-y-2">
                이름 :
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormData}
                        className="px-3 py-2 border border-gray-300 rounded"
                    />
            </label>
            <label className="flex flex-col space-y-2">
                이메일 :
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleFormData}
                        className="px-3 py-2 border border-gray-300 rounded"
                    />
            </label>
            <button
                type="submit"
                className="px-4 py-2 font-medium text-white bg-blue-500 hover:bg-blue-600"
            >
                제출
            </button>
        </form>
    )

}