# hono_preact4cms

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2023/10/28

 update  : 2023/10/29 

***
### Summary

preact.js + hono + workers + D1, CMS sample

* /admin : editor pages

***
### wrangler.toml

* db setting, sample
```
name = "hono_preact4cms"
main = "src/index.ts"
compatibility_date = "2023-09-01"
node_compat = true

[site]
bucket = "./public"

[vars]
#API_KEY = "123"
#BASIC_USER_NAME = "test"
#BASIC_USER_PASSWORD = "1111"

[[d1_databases]]
binding = "DB" # i.e. available in your Worker on env.DB
database_name = "db123"
database_id = ""


```
***
### blog 


***

