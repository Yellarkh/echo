-- phpMyAdmin SQL Dump
-- version 4.1.9
-- http://www.phpmyadmin.net
--
-- Client :  mysql51-99.perso
-- Généré le :  Ven 13 Juin 2014 à 19:59
-- Version du serveur :  5.1.73-1.1+squeeze+build0+1-log
-- Version de PHP :  5.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `antoinedvzmod1`
--

-- --------------------------------------------------------

--
-- Structure de la table `members`
--

CREATE TABLE IF NOT EXISTS `members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `cle` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Contenu de la table `members`
--

INSERT INTO `members` (`id`, `login`, `password`, `mail`, `status`, `cle`) VALUES
(1, 'Yellarkh', 'Judith13', 'yellarkh@gmail.com', 1, 'b290aa43a923c90e9feade9027588af9'),
(2, 'tfedwm14', 'tfedwm14', '', 1, ''),
(3, 'Sallyskell', 'keepsmiling', 'sabrina.casciato@gmail.com', 1, '272e05967cb8f33037b229ce14ac8a36'),
(4, 'Olivvv', 'Oliv1277', 'olivvv@gmail.com', 1, '30d821b443126d4f991574e92a5c6461'),
(5, 'test', 'test', 'test@yopmail.com', 0, '2d7adffa7f57b2a4145423a78d3b1390'),
(6, 'boblemarin', 'a', 'emeric@minimal.be', 1, '44eb513a0d406afeab409b78bf355935'),
(7, 'lemagus', 'coucou', 'gabriel@adjust.be', 1, '96eac8203a7ae4cef0842dff7fd2e53a'),
(8, 'julienhe', 'julien', 'hoshi.graphi@gmail.com', 1, '0bc01273aaf90e3c302e082830f64878'),
(9, 'pixeline', 'jojojo', 'alexandre@pixeline.be', 1, 'c9fa907b28455e91c89e533f6a169fed'),
(10, 'stenuitj', 'test', 'jeremy.stenuit9@gmail.com', 1, '1d85915fda37361f90fd42c5b21eb917'),
(11, 'marius', 'blabla123', 'kofinc@gmail.com', 1, '9e065918a7e4a24468cf5c9c20ca115b'),
(12, 'coucou', 'coucou', 'coucou@gmail.com', 0, '87ad78878930587f5fb657c2d1f3744c');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
