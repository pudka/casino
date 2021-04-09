from flask import render_template
from flask import Flask
from flask_babel import Babel
from config import Config


import os


app = Flask(__name__, template_folder=os.path.abspath('casino_app/templates'),
            static_folder=os.path.abspath('casino_app/static'))
app.config.from_object(Config)
babel = Babel(app)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/vacancy')
def vacancy():
    return render_template("vacancy.html")


@app.route('/contacts')
def contacts():
    return render_template("contacts.html")


@app.route('/about')
def about():
    return render_template("about.html")


@app.route('/login')
def login():
    return render_template("login.html")


@app.route('/register')
def register():
    return render_template("register.html")


if __name__ == "__main__":
    app.run(port=8888, debug=True)
