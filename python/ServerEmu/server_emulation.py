#!flask/bin/python

from flask import Flask, jsonify

app = Flask(__name__)

example_game_card = [
    {
        "gamename" : "This is a game",
        "playerNumbers": 5,
        "isPlayersTurn": False,
        "currentScore" : 0,
        "active" : True
        
    }
]


@app.route('/api/requestgames', methods=['GET'])
def get_game_cards():
    return jsonify({'games': example_game_card})
    
if __name__ == '__main__':
    app.run(debug=True)