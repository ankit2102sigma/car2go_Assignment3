-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 03, 2023 at 11:43 AM
-- Server version: 8.0.32-0ubuntu0.20.04.2
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `car2go`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`) VALUES
(1, 'Ankit Arora', 'test@gmail.com', '$2y$10$SCTiFS07lrKLlkSqDAhck.Da7ro6RZv6OBlTiAcmI59aVJkq27kNm');

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `id` bigint UNSIGNED NOT NULL,
  `brand` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` int NOT NULL,
  `price` int NOT NULL,
  `gearbox` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fuel` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `available` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `brand`, `model`, `year`, `price`, `gearbox`, `fuel`, `image`, `available`, `created_at`, `updated_at`) VALUES
(1, 'Audi', 'i7', 2023, 25000, 'Automatic', 'Petrol', 'images/cars/1683023676.png', 1, NULL, NULL),
(2, 'Audi', 'Q3', 2022, 25000, 'Automatic', 'Petrol', 'images/cars/1683023831.png', 1, NULL, NULL),
(3, 'BMW', 'A5', 2022, 15000, 'Automatic', 'Petrol', 'images/cars/1683023940.png', 1, NULL, NULL),
(4, 'Audi', 'A9', 2023, 23544, 'Automatic', 'Petrol', 'images/cars/1683025269.png', 1, NULL, NULL),
(5, 'Audi', 'Super 3', 2021, 15000, 'Automatic', 'Petrol', 'images/cars/1683024036.png', 1, NULL, NULL),
(6, 'Tata', 'P9', 2022, 10000, 'Automatic', 'Petrol', 'images/cars/1683024066.png', 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(5, '2023_04_25_071035_create_admin_table', 1),
(22, '2014_10_12_000000_create_users_table', 2),
(23, '2014_10_12_100000_create_password_resets_table', 2),
(24, '2019_08_19_000000_create_failed_jobs_table', 2),
(25, '2019_12_14_000001_create_personal_access_tokens_table', 2),
(26, '2023_04_26_091107_create_cars_table', 2),
(27, '2023_05_01_064832_create_rent_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rent`
--

CREATE TABLE `rent` (
  `id` bigint UNSIGNED NOT NULL,
  `rent_date` datetime NOT NULL,
  `return_date` datetime NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `car_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rent`
--

INSERT INTO `rent` (`id`, `rent_date`, `return_date`, `price`, `user_id`, `car_id`, `created_at`, `updated_at`) VALUES
(1, '2023-05-01 00:00:00', '2023-05-20 00:00:00', '190000.00', 2, 6, '2023-05-02 12:34:10', '2023-05-02 12:34:10'),
(2, '2023-05-01 00:00:00', '2023-05-27 00:00:00', '650000.00', 3, 2, '2023-05-02 12:35:26', '2023-05-02 12:35:26'),
(3, '2023-05-03 00:00:00', '2023-05-20 00:00:00', '425000.00', 3, 2, '2023-05-02 12:40:44', '2023-05-02 12:40:44'),
(4, '2023-05-05 00:00:00', '2023-05-21 00:00:00', '400000.00', 4, 1, '2023-05-02 13:51:16', '2023-05-02 13:51:16'),
(5, '2023-05-02 00:00:00', '2023-05-20 00:00:00', '450000.00', 5, 2, '2023-05-02 23:36:13', '2023-05-02 23:36:13'),
(6, '2023-05-01 00:00:00', '2023-06-02 00:00:00', '320000.00', 5, 6, '2023-05-02 23:42:17', '2023-05-02 23:42:17'),
(7, '2023-05-01 00:00:00', '2023-05-31 00:00:00', '300000.00', 5, 6, '2023-05-02 23:44:35', '2023-05-02 23:44:35'),
(8, '2023-05-02 00:00:00', '2023-05-20 00:00:00', '270000.00', 5, 3, '2023-05-02 23:44:53', '2023-05-02 23:44:53'),
(9, '2023-05-01 00:00:00', '2023-05-18 00:00:00', '170000.00', 5, 6, '2023-05-03 00:03:48', '2023-05-03 00:03:48');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `is_admin`, `created_at`, `updated_at`) VALUES
(1, 'Ankit Arora', 'admin@gmail.com', NULL, '$2y$10$3whjyAkEJfaz5jqVPP11De7932Pp821josfN.Ot.qn2HAa3oeZ5ga', NULL, 1, NULL, NULL),
(2, 'Ankit', 'ankit123@gmail.com', NULL, '$2y$10$0ix6lyjBaDi5e0uP1HV86.vluDaSyYIzDNZUUr5joNvyKyeUKdW3i', NULL, 0, NULL, NULL),
(3, 'Ankit Arora', 'ankit.arora@gmail.com', NULL, '$2y$10$avHkDCaYA0K6PkkdDPC9SOdEoS9lt9OhHOoj/b5GX1M1KFQXhdVda', NULL, 0, NULL, NULL),
(4, 'abhay', 'abhay@abhay.com', NULL, '$2y$10$.DCQFeqF2d9d4eEP9JD9DuHkJDVJ3eOaOmFBeIGQQhi1ACTrdr9ce', NULL, 0, NULL, NULL),
(5, 'Ankit', 'ankit@test.gmail', NULL, '$2y$10$pRzFFu5aIXD9uVo3LUcPPOdiipgu6Ylk/R5v2eKI9L7X2daiTZ9ou', NULL, 0, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_email_unique` (`email`);

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `rent`
--
ALTER TABLE `rent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rent`
--
ALTER TABLE `rent`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
