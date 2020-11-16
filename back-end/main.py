import flask
from controllers import auth_controller
import os
from flask_bcrypt import Bcrypt

app = flask.Flask(__name__)
Bcrypt(app)

def register_controllers(application):
    application.register_blueprint(auth_controller.routes)

if __name__ == '__main__':
    register_controllers(app)
    app.run(host=os.getenv('HOST'), port=os.getenv('PORT'))
