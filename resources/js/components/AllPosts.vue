<template>
    <div>
        <div class="container">
        <div class="text-center" style="margin: 20px 0px 20px 0px;">
            <span class="text-secondary">110 Final Project</span>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <router-link to="/home" class="nav-item nav-link">Home</router-link>
                    <router-link to="/add" class="nav-item nav-link">Add Post</router-link>
                    <router-link to="/" class="nav-item nav-link">Login</router-link> <!-- Add the login link -->
                </div>
            </div>
        </nav>
        <br/>
     </div>
     
        <h3 class="text-center">All Posts</h3><br/>

        <table class="table table-bordered">
            <thead>
            <tr>
                <th @click="sortById()">ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
                
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts" :key="post.id">
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.description }}</td>
                <td>{{ new Date(post.created_at).toDateString() }}</td>
                <td>{{ new Date(post.updated_at).toDateString() }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-primary">Edit
                        </router-link>
                        <router-link :to="{name: 'read', params: { id: post.id }}" class="btn btn-info">Read</router-link>

                        <button class="btn btn-danger" @click="deletePost(post.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        <div v-if="error" class="alert alert-danger mt-3">
            {{ error }} <!-- Show error message if there is an error -->
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posts: [],
                error: null, // Add error state

            }
        },
        mounted() {
            this.getAllPost();
        },
        methods: {

            sortById() {
      if (this.sortBy === 'id') {
        this.sortDesc = !this.sortDesc;
      } else {
        this.sortBy = 'id';
        this.sortDesc = false;
      }

      this.posts.sort((a, b) => {
        return this.sortDesc ? b.id - a.id : a.id - b.id;
      });
    },
            getAllPost(){
                axios
                .get('http://localhost:8000/api/post/all')
                .then(response => {
                    this.posts = response.data;
                });
            },
            deletePost(id) {
            if (confirm('Are you sure you want to delete this post?')) {
                axios
                    .delete(`http://localhost:8000/api/post/delete/${id}`)
                    .then(response => {
                        let i = this.posts.map(item => item.id).indexOf(id);
                        this.posts.splice(i, 1);
                    })
                    .catch(error => {
                        console.error('Error deleting post:', error);
                        // Provide feedback to the user about the error
                        alert('Error deleting post. Please try again.');
                    });
            }
        },
    },
};
</script>