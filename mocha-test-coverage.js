npm i nyc --save-dev

{
  "scripts": {
    "test": "mocha",
    "test-with-coverage": "nyc --reporter=text mocha"
  }
}

npm run test-with-coverage

Fail if the total code coverage is below 90%:

nyc --check-coverage --lines 90 
Fail if the code coverage of at least one file is below 90%:

nyc --check-coverage --lines 90 --per-file
