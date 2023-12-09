import json
import configparser

config = configparser.ConfigParser()
config.read('./../config.properties')

with open('./../package.json', 'r') as file:
    setup_content = file.read()

setup_data = json.loads(setup_content)

setup_data['version'] = config.get('DEFAULT', 'VERSION')
setup_data['name'] = config.get('DEFAULT', 'NAME')

with open('./../package.json', 'w') as file:
    json.dump(setup_data, file, indent=2)
