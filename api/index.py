from flask import Flask
from flask import Response
from flask import Request

app = Flask(__name__)

@app.route("/")
def index():
    resp = Response("Foo bar baz")
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


@app.route("login")
def login():


if __name__=='__main__':
    app.run(debug=True)