# simonecelia.it

My personal site repository www.simonecelia.it

+ Theme URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
+ PHP: 7.4+
+ DB: mysql / mariadb

---
## config.php example
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