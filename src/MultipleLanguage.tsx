import React, { useState } from 'react'

export default function MultipleLanguage({ langId }: { langId: string }) {

    const button: { [key: string]: string } = {
        "en": "Save",
        "mr": "Jatan Kara"
    }

    const heading: { [key: string]: string } = {
        'en': "Login Form",
        "mr": "Pravesh Patra"
    }


    return (
        <div>
            <h1>{heading[langId]}</h1>
            <button>{button[langId]}</button>
        </div>
    )
}
