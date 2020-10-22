
# Test execution
To run the tests, clone the latest version of this repo then install the node modules using 
```npm install```. 
Afterwards execute 
```npm run build```
 then run the suite
  ```npm run test --suite gmail```
to generate reports
```allure generate --clean```
to open reports-server
```allure open```

To run a test by itself, use ```./node_modules/.bin/wdio --spec <path to test> wdio.conf.js```.
