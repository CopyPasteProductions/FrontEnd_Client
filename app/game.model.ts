
export /**
 * GameOverview
 */
    class GameOverview {
    id: number;
    name: string;
    numberOfPlayers: number;
    isPlayersTurn: boolean;
    currentScore: number;
    active: boolean;

    constructor() {

    }
    
    public toString() : string { 
        return "GameOverview [id: " + this.id + " name: " + this.name+"]";
    }
}