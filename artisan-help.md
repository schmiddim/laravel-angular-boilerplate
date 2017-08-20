== IDE Helper Generator ==

https://github.com/barryvdh/laravel-ide-helper
php artisan ide-helper:generate #- phpDoc generation for Laravel Facades
php artisan ide-helper:models #- phpDocs for models
php artisan ide-helper:meta #- PhpStorm Meta file

Create Seeder
 php artisan make:seed BrandsTableSeeder

 Create Migration
php artisan make:migration create_tasks_video --create=video

Create Model

 php artisan make:model Comment

Seed database

 php artisan db:seed


Delete DB
php artisan migrate:reset


Up
 php artisan migrate:refresh --seed


DO THIS

php artisan migrate:reset && php artisan migrate --seed

