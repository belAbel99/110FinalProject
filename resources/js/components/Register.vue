<!-- resources/js/components/Register.vue -->
<template>
    <div>
        <h3 class="text-center">Register</h3>
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <form @submit.prevent="register">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="name" required>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" v-model="email" required @input="validateEmail">
                        <small v-if="!isEmailValid && email !== ''" class="text-danger">Please enter a valid email address.</small>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model="password" required>
                    </div>
                    <button type="submit" class="btn btn-primary" :disabled="!isFormValid">Register</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: '',
                isEmailValid: true,

            };
        },
        computed: {
        isFormValid() {
            return this.isEmailValid && this.name !== '' && this.password !== '';
        },
    },
        methods: {
            validateEmail() {
            // Use a regular expression to check the email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.isEmailValid = emailRegex.test(this.email);
        },
        register() {
            // Handle registration logic here
            if (this.isFormValid) {
                // Perform registration

                // Redirect to the login page after successful registration
                this.$router.push('/');
            } else {
                console.log('Form is not valid. Please check your inputs.');
            }
        },
    },
};
</script>
