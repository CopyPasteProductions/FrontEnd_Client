#!flask/bin/python

from flask import Flask, jsonify
from pprint import pprint
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
example_game_card = {
        "id": 0,
        "name" : "This is a game",
        "numberOfPlayers": 5,
        "isPlayersTurn": False,
        "currentScore" : 0,
        "active" : True
        
    }



@app.route('/api/requestgames', methods=['GET', 'OPTIONS'])
def get_game_cards():
    jsn = jsonify({"data" :[example_game_card]})
    pprint(jsn)
    print jsn 
    return jsn
    
if __name__ == '__main__':
    app.run(debug=True)