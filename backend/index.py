from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="*")

@app.route("/", methods=["GET"])
def home():
    return jsonify("hello there")

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
