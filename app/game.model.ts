
export /**
 * GameOverview
 */
    class GameOverview {
    Id: number;
    Name: string;
    ActivePlayerId: number;
    CurrentScore: number;
    Active: boolean;
    Players: Player[];
    
    constructor() {}
}

export
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