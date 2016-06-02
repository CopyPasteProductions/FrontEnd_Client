
export /**
 * GameOverview
 */
    class GameOverview {
    Id: number;
    name: string;
    NumberOfPlayers: number;
    IsPlayersTurn: boolean;
    CurrentScore: number;
    Active: boolean;
    Players: Player[];
    
    constructor() {

    }
    
    public toString() : string { 
        return "GameOverview [id: " + this.Id + " name: " + this.name+"]";
    }
}


/**
 * Representation of the player on the gameoverview screen
 */
class Player {
    Id: number;
    Name: string;
    Avatar: number;
    
    constructor() {
    }
    
    
}