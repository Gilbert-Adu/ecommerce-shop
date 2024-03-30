from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="*")

@app.route("/", methods=["GET"])
def home():
    return "hello"

if __name__ == '__main__':
    app.run(debug=True, port=5000)
