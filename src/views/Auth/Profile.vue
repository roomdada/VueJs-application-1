<script setup>
import { useUserStore } from '../../stores/user';

const user = useUserStore();

console.log(user.getUser)
</script>
<template>
 <div class="page-wrapper">
        <div class="container-xl">
          <!-- Page title -->
          <div class="page-header d-print-none">
            <div class="row g-2 align-items-center">
              <div class="col">
                <h2 class="page-title">
                  Mon compte
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="page-body">
          <div class="container-xl">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Information du compte</h3>
              </div>
              <div class="card-body">
                <div class="datagrid">
                  <div class="datagrid-item">
                    <div class="datagrid-title">Date d'inscription</div>
                    <div class="datagrid-content">{{ user.getUser.created_at }}</div>
                  </div>
                  <div class="datagrid-item">
                    <div class="datagrid-title">Nom</div>
                    <div class="datagrid-content">{{ user.getUser.first_name }}</div>
                  </div>
                  <div class="datagrid-item">
                    <div class="datagrid-title">Prénoms</div>
                    <div class="datagrid-content">{{ user.getUser.last_name }}</div>
                  </div>
                  <div class="datagrid-item">
                    <div class="datagrid-title">E-mail</div>
                    <div class="datagrid-content">{{ user.getUser.email }}</div>
                  </div>
                  <div class="datagrid-item">
                    <div class="datagrid-title">Type de compte</div>
                    <div class="datagrid-content">{{ ! user.getUser.is_admin ? "Prestataire" : "Autre" }}</div>
                  </div>
                  <div class="datagrid-item">
                    <div class="datagrid-title">Contact</div>
                    <div class="datagrid-content">{{ user.getUser.contact }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<style>
</style>
