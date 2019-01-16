export interface Store {
    team: Member[];
}

export interface Member {
    id: string;
    name: string;
    position: string;
    bio?: string;
}
