from flask import render_template, redirect, request
from flask import Flask, session
from flask_babel import Babel
from config import Config


import os


app = Flask(__name__, template_folder=os.path.abspath('casino_app/templates'),
            static_folder=os.path.abspath('casino_app/static'))
app.config.from_object(Config)
app.config['BABEL_DEFAULT_LOCALE'] = 'en'
babel = Babel(app)


@babel.localeselector
def get_locale():
    """ return desired language """
    return request.accept_languages.best_match(['uk', 'ru', 'en'])


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/lang')
def change_lang():
    return redirect('/')


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


@app.route('/main')
def main():
    return render_template("main.html")


if __name__ == "__main__":
    app.run(port=51413, host='0.0.0.0')
