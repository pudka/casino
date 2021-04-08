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


if __name__ == "__main__":
    app.run(port=8888, debug=True)
