<template>
   

    <div class="hero bg-base-200 min-h-screen">
        <div class="border border-yellow-500 bg-[url('/images/lire.jpeg')] bg-cover bg-center h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse  ">
          <div class="text-center lg:text-left border border-red-500">
            <h1 class="text-5xl font-bold">Bienvenue!</h1>

            <p class="py-6">
                Connectez-vous pour accéder à votre compte et découvrir nos dernières fonctionnalités.
            </p>
          </div>
          <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:py-14">
            <form class="card-body">
              <div class="form-control ">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" class="input input-bordered" required />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Mot de passe</span>
                </label>
                <input type="password" placeholder="password" class="input input-bordered" required />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">mot de passe oublié?</a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn text-md bg-base-content text-white hover:bg-success active:bg-success">Se Connecter</button>
              </div>
            </form>
          </div>
        </div>
    </div>
      </div>
</template>

<script setup>

</script>

<style scoped>

</style>