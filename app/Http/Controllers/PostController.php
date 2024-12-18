<?php

namespace App\Http\Controllers;

use App\Models\Post; 
use Illuminate\Http\Request; 
use Inertia\Inertia; 

class PostController extends Controller
{
    function index()
    {
        $posts = Post::latest()->get();
        return Inertia::render('Posts/Index', ['posts' => $posts]);
    }

    function create()
    {
        return Inertia::render('Posts/Create');
    }

    function store(Request $request)
    {   
        $validated = $request->validate([
            'title' => 'required|max:255',
            'content' => 'required',
        ]);

        Post::create($validated);
        return redirect()->route('posts.index')->with('success', 'Post created successfully!');   
    }

    function show($id)
    {
        $post = Post::findOrFail($id);
        return Inertia::render('Posts/Edit', ['post' => $post]);
    }

    function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'content' => 'required',
        ]);
            
        $post = Post::findOrFail($id);
        $post->update($validated);
        return redirect()->route('posts.index')->with('success', 'Post updated successfully!');
    }

    function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();
        return redirect()->route('posts.index')->with('success', 'Post deleted successfully!');
    }

}