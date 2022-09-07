export interface Register{
    login:string
    password:string
    nom:string
    prenom:string
    adresse:string
    telephone : string
    token?:string
    roles?: ROLE[];
}

export const enum ROLE{
    user = 'ROLE_CLIENT',
    admin = 'ROLE_GESTIONNAIRE'
}