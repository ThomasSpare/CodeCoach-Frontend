set -o errexit
npm run heroku-prebuild
pip install -r requirements.txt