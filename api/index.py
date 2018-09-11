from flask import Flask
from flask import Response,make_response,Request,request


app = Flask(__name__)

@app.route("/")
def index():
    resp = Response("Foo bar baz")
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


@app.route("/login", methods=['POST'])
def login():
    if request.method=='POST':
        username=request.form['name']
        resp = Response('aaa')
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp




if __name__=='__main__':
    app.run(debug=True)