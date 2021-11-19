 

const validateString = (text: any): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const validateDate = (date: string ): boolean => {
    return Boolean(Date.parse(date));
};

export const parseGenericString = (texto: any): boolean => { 
    if( !texto || !validateString(texto)){
        return false;
    }
    return true;
};

export const parseGenericDate = (date: any): boolean=>{
    if(!date || !validateString(date) || !validateDate(date)){
        return false;
    }
    return true;
};

