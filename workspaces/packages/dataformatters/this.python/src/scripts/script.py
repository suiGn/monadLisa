import sys
import json

# Imagine this script takes an input and returns a simple JSON
# For a real scenario, replace this with your script's logic
data = {"message": f"Hello, {sys.argv[1]} from Python!"}
print(json.dumps(data))
