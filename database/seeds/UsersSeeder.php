<?php

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::query()->truncate();

        DB::table('users')->insert([
            'name' => 'test',
            'email' => 'test@email.com',
            'password' => bcrypt('secret'),
            'remember_token' => str_random(10)
        ]);
        
        factory(User::class, 5)
            ->create();
    }
}
