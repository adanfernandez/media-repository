from flask import Blueprint, jsonify
from flask_cors import cross_origin
from core.use_cases.auth_use_case import Auth_use_case


auth_use_case = Auth_use_case()
routes = Blueprint('auth', __name__, url_prefix='/auth')

@routes.route("/register", methods=['POST'])
@cross_origin()
def register_user():
    """POST method to register a user"""
    value_return = auth_use_case.do_register()
    result = {
        'auth': value_return['auth'],
        'email': value_return['email'],
        'token': value_return['token'],
    }
    return jsonify(result), 201


