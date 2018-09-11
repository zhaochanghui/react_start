from flask import Flask
from flask import Response,make_response,Request,request


app = Flask(__name__)

@app.route("/")
def index():
    resp = Response("Foo bar baz")
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


@app.route("/login",methods=['POST'])
def login():
    name = request.form['name']
    # name =  request.form.keys()[0]
    # pwd = request.form['pwd']
    # resp = Response(name+",,"+pwd)
    resp = Response('dd'+name)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

    #
    # rst = make_response('')
    # rst.headers['Access-Control-Allow-Origin'] = '*'
    #
    # # resp = Response("Foo bar baz")
    # # resp.headers['Access-Control-Allow-Origin'] = '*'
    # if request.method == 'POST':
    #     return 'post'
    #
    # else:
    #     return 'error'
    #     # username=request.form['name']
    #     # resp = Response('aaa')
    #     # resp.headers['Access-Control-Allow-Origin'] = '*'
    #     # return resp




if __name__=='__main__':
    app.run(debug=True)