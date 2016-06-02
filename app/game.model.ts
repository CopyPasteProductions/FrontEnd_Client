
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

    constructor() {

    }
    
    public toString() : string { 
        return "GameOverview [id: " + this.Id + " name: " + this.name+"]";
    }
}