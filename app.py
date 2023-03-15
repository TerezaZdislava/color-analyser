from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS
import logging
from base64 import b64encode
from rembg import remove
import os
# from PIL import Image
# logging.basicConfig(level=logging.INFO)

logger = logging.getLogger('HELLO WORLD')
app = Flask(__name__, static_url_path='', static_folder='frontend/build')
app.config['ALLOWED_EXTENSIONS'] = ['.jpg', '.jpeg', '.png', '.gif']

@app.route('/upload', methods=['POST'])
def fileUpload():
    uploaded_file = request.files['file']
    filename = secure_filename(uploaded_file.filename)
    logger.info("file " + uploaded_file.content_type) 
    file_ext = os.path.splitext(filename)[1]
    if file_ext not in app.config['ALLOWED_EXTENSIONS'] :
        return "Invalid image", 400
    image = b64encode(remove(uploaded_file.read())).decode("utf-8")
    return jsonify({'status': True, 'image': image})

CORS(app, expose_headers='Authorization')
