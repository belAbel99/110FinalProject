<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::latest()->get();
        return response()->json($posts);
    }

    public function addPost(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        $post = Post::create($validatedData);

        return response()->json(['message' => 'Post added successfully', 'post' => $post], 201);
    }


    public function edit($id){
        $post = Post::find($id);
        return response()->json($post);
    }

    public function update($id, Request $request){
        $post = Post::find($id);
        $post->update($request->all());
        return response()->json('The post successfully updated');
    }

    public function delete($id){
        $post = Post::find($id);
        $post->delete();
        return response()->json('The post successfully deleted');
    }
    public function read($id)
    {
        $post = Post::find($id);

        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }

        return response()->json($post);
    }
}
