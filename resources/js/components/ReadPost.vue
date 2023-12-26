<!-- ReadPost.vue -->
<template>
    <div>
        <h3 class="text-center">Read Post</h3>
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <div v-if="post" class="post-box">
                        <h1>{{ post.title }}</h1>
                        <p>{{ post.description }}</p>
                        <p><strong>Created At:</strong> {{ new Date(post.created_at).toDateString() }}</p>
                        <p><strong>Updated At:</strong> {{ new Date(post.updated_at).toDateString() }}</p>
                        <router-link to="/home" class="btn btn-primary">Back to Home</router-link>
                    </div>
                    <div v-else class="error-box">
                        <p>Post not found</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.post-box {
    border: 1px solid #ddd; /* Add border */
    padding: 20px; /* Add padding */
    margin-top: 20px; /* Add margin */
    background-color: #f9f9f9; /* Add background color */
}
</style>

<script>
export default {
    data() {
        return {
            post: null,
        };
    },
    mounted() {
        this.readPost();
    },
    methods: {
        readPost() {
            const postId = this.$route.params.id;

            axios.get(`http://localhost:8000/api/post/read/${postId}`)
                .then(response => {
                    this.post = response.data;
                })
                .catch(error => {
                    console.error('Error fetching post details:', error);
                });
        },
    }
};
</script>
