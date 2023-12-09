import json

properties = {}
with open('./../config.properties', 'r') as file:
    for line in file:
        # Skip comments and empty lines
        if line.strip() and not line.startswith('#') and not line.startswith(';'):
            key, value = line.strip().split('=')
            properties[key.strip()] = value.strip()


with open('./../package.json', 'r') as file:
    setup_content = file.read()

setup_data = json.loads(setup_content)

setup_data['version'] = properties.get('VERSION')
setup_data['name'] = properties.get('NAME')

with open('./../package.json', 'w') as file:
    json.dump(setup_data, file, indent=2)
