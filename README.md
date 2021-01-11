# **E2E UI automation framework using cypress and JavaScript** 

## **How to run Automation Test**

### **Installation**

**(1) First we have to copy git repository on our local system:**

```
git clone https://github.com/kartikeya27/kartikeya27-ESOAutomation.git

```
**(2) then type:** 

```
npm install

```
**(3) run specific command:** 
```
* Run all test under test folder headless browser:---> npm run test  
* Run test with default electron browser with:--------> npm run headTest 
* Run test with chrome browser:----------------------> npm run chromeTest
* Run test on cypress dashboard with mochawesome reporter:---> npm run recordDashboardTest
* Run test locally and want to see moachawesome report:---> npm run mochawesome

```
### **Structure about this framework:**
```
1. Fixture: 
   Here we can define our data in json format.
   
2. Integration:
   Here we can create any folder based on our choice. Inside this folder we can create our test script.
   
3. Support:
   Here I have defined Page Object Pattern, so there is less chances for duplication of code. Any css ,
   id or name we can define inside Page Object class. 
   
   We also have command.js file where we can create our custom command. I have created two of them.
   There is very good inbuild functionality coming with cypress called dashboard. We can connect our
   local result on cypress dashboard server. It will record video about whatever steps we did through 
   automation using record key. If any of our test fails it will automatically take screenshot. This 
   dashboard service is free up to 3 user with 500 test recoding per/month.
   
4. I have use mochawesome reporting tool which is totally free.

5. To invoke UI test runner please go to your root folder of this project. Then 
   type node_modules/.bin/cypress open

```
# **Note:**
## **Please do let me know, if you have any issue with running test locally or any questions about this framework.**






