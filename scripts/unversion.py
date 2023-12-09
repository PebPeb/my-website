import json

with open('./../package.json', 'r') as file:
    setup_content = file.read()

setup_data = json.loads(setup_content)

setup_data['version'] = "X.X.X"
setup_data['name'] = "default"

with open('./../package.json', 'w') as file:
    json.dump(setup_data, file, indent=2)

