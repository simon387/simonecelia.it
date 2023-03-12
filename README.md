# simonecelia.it

My personal site repository www.simonecelia.it

+ Theme URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
+ PHP: 7.4+
+ DB: mysql / mariadb
+ React, with Typescript

---

## dev info

+ ```.github/``` folder contains CI/CD logic.
+ ```docs/``` folder contains template backups.
+ ```dumps/``` folder contains the script to create the database and the table(s).
+ ```test/``` folder contains repeteable tests for dev and prod enviroments.
+ ```deploy_localhost.*``` are script for localhost deploy and tests.

---

## config.php example

docker

```injectablephp
<?php

class Config
{
	static $db_host = '172.17.0.2';
	static $db_name = 'simonecelia';
	static $db_username  = 'test';
	static $db_password  = 'test';
	static $db_statement_0  = "SET GLOBAL time_zone='Europe/Madrid'";
	static $send_email = true;
	static $smtp_email = 'simone.celia@simonecelia.it';
}
```

localhost

```injectablephp
<?php

class Config
{
	static $db_host = 'localhost';
	static $db_name = 'simonecelia';
	static $db_username  = 'root';
	static $db_password  = 'root';
	static $db_statement_0  = "SET GLOBAL time_zone='Europe/Madrid'";
	static $send_email = false;
	static $smtp_email = 'simone.celia@simonecelia.it';
}
```

## Useful links

+ https://www.iloveimg.com

## todo prima di andare in prod

+ saveFromBackend
+ save from front end
+ email
+ CI