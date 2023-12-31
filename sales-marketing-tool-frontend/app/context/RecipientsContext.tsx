import { ReactNode, createContext, useContext, useState } from "react";

type RecipientsType = {
    name: string;
    catagory: string;
    email: string;
}

type RecipientsContextType = { 
    id: number | null;
    name: string | null;
    category: string | null;
    email: string | null;
    editMode: boolean;
    SetName: (Name:string|null) => void;
    SetCategory: (Category:string|null) => void;
    SetEmail: (Email:string|null) => void;
    SetEditMode: (Edit:boolean) => void,
    SetId: (Id:number|null) => void,

};


const FeedbackContextDefaultValues: RecipientsContextType = {
    id: null,
    name: null,
    category: null,
    email: null,
    editMode: false,
    SetName: (Name:string|null) => {},
    SetCategory: (Category:string|null) => {},
    SetEmail: (Email:string|null) => {},
    SetEditMode: (Edit:boolean) => {},
    SetId: (Id:number|null) => {},
}

const RecipientsContext = createContext<RecipientsContextType>(FeedbackContextDefaultValues);

export function useRecipients() {
    return useContext(RecipientsContext);
}

type Props = {
    children: ReactNode;
};

export function RecipientsProvider({ children }: Props) {
    const [id, setId] = useState<number | null>(null)
    const [name, setName] = useState<string | null>(null)
    const [category, setCategory] = useState<string | null>(null)
    const [email, setEmail] = useState<string | null>(null)
    const [editMode, setEditMode] = useState<boolean>(false)

    const SetId = (Id:number|null) => {
        setId(Id);
    }
    const SetName = (Name:string|null) => {
        setName(Name);
    }
    const SetCategory = (Category:string|null) => {
        setCategory(Category);
    }
    const SetEmail = (Email:string|null) => {
        setEmail(Email);
    }
    const SetEditMode = (Edit:boolean) => {
        setEditMode(Edit);
    }

    const value = {
        id,
        SetId,
        name,
        SetName,
        category,
        SetCategory,
        email,
        SetEmail,
        editMode,
        SetEditMode,
    };

    return (
        
        <RecipientsContext.Provider value={value}>
            {children}
        </RecipientsContext.Provider>
        
    );
}