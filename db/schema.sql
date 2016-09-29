CREATE DATABASE `schema` /*!40100 DEFAULT CHARACTER SET latin1 */;
CREATE TABLE `burgers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(45) NOT NULL,
  `devoured` tinyint(4) NOT NULL,
  `date` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
SELECT * FROM `schema`.burgers;