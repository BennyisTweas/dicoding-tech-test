<?php

use App\Http\Resources\VacancyResource;
use App\Models\Vacancy;
use Illuminate\Support\Facades\Route;

Route::get('/vacancies', function () {
    return VacancyResource::collection(Vacancy::all());
});
