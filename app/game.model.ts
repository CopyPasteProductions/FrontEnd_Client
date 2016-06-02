
export /**
 * GameOverview
 */
    class GameOverview {
    Id: number;
    Name: string;
    IsPlayersTurn: boolean;
    CurrentScore: number;
    Active: boolean;
    Players: Player[];
    
    constructor() {}
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