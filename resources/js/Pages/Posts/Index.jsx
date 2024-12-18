import React, { useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Link, usePage } from '@inertiajs/inertia-react'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = () => 
{   
    const { posts, flash } = usePage().props;

    useEffect(() => 
    {
        if(flash.success) 
        {
            toast.success(flash.success);
        }else if(flash.error) 
        {
            toast.error(flash.error);
        }
    }, [flash]);

    const handleDelete = (id) => 
    {
        if(confirm("Apakah Anda yakin ingin menghapus ini?")) 
        {
            Inertia.delete(`/posts/${id}`, 
            {
                onSuccess: () => {
                    Inertia.visit('/posts'); 
                },
                onError: (errors) => {
                    console.error(errors); 
                }
            });
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center mb-5">CRUD LARAVEL 8 + INERTIA + REACT</h1>
                    <h3 className="mb-4">Posts Management</h3>
                    <Link href="/posts/create" className="btn btn-primary mb-3">Create Post</Link>
                    <div className="card border-0 rounded shadow">
                        <div className="card-body">
                            <table className="table table-striped table-bordered">
                                <thead className="text-center">
                                    <tr>
                                        <th width="5%">#</th>
                                        <th>Title</th>
                                        <th>Content</th>
                                        <th width="10%">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        posts.length > 0 ? 
                                        (
                                            posts.map((post, index) => (
                                                <tr key={post.id}>
                                                    <td className="text-center">{index + 1}</td>
                                                    <td>{post.title}</td>
                                                    <td>{post.content}</td>
                                                    <td className="text-center">
                                                        <Link href={`/posts/${post.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                                                        <button onClick={() => handleDelete(post.id)} className="btn btn-danger btn-sm">Hapus</button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : 
                                        (
                                            <tr>
                                                <td colSpan="4" className="text-center">
                                                    <div className="alert alert-danger">
                                                        Data Belum Tersedia!
                                                    </div>
                                                </td>
                                            </tr>
                                        )                                        
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;