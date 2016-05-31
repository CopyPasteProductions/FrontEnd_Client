
export /**
 * Game
 */
    class Game {
    id: number;
    name: string;
    numberOfPlayers: number;
    isPlayersTurn: boolean;
    currentScore: number;
    active: boolean;

    constructor() {

    }
    
    public toString() : string { 
        return "Game [id: " + this.id + " name: " + this.name+"]";
    }
}