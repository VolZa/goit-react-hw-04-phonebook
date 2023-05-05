// import { Component } from 'react';
import { useState} from "react";
import { nanoid } from 'nanoid'
import { FormPhBS, AddContact, Label } from './FormPhB.styled';


export const FormPhB = ({addContact}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const onSubmit = () => {
        const id = nanoid();
        addContact({  id, name, number });
      };

    return (
        <FormPhBS onSubmit={onSubmit}>
            <Label>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={ e => setName( e.currentTarget.value )}
                />
            </Label>

            <Label>
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={e => {
                        setNumber( e.currentTarget.value );
                    }}
                />
            </Label>

            <AddContact type="submit">Add contact</AddContact>
        </FormPhBS>
    );
}

